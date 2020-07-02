import React, { Fragment, useEffect, useState } from "react";
import Weather from "../weather";
import axios from "axios";
import iconoLoading from '../../assets/Rolling-1s-200px.svg';
import { getBackUrl } from '../utilities/utils';
import './style.css';

const WeatherContainer = (props) => {
    const [huboError, setError] = useState(false);
    const [weatherLoading, setWeatherLoading] = useState(true);
    const [weatherData, setWeatherData] = useState({});
    const [forecastLoading, setForeCastLoading] = useState(true);
    const [forecastData, setForeCastData] = useState([]);
    const [forecastCity, setForeCastCity] = useState("");
    const [cityId, setCityId] = useState("-1");

    const getWeather = async (cityId) => {
        if (cityId !== "")
        cityId = "/" + cityId;
        let url = getBackUrl() + "/v1/current" + cityId;
        const output = await axios.get(url);    
        let data = output.data
        return data
    }
    const getForeCast = async (cityId) => {
        if (cityId !== "")
        cityId = "/" + cityId;        
        let url = getBackUrl() + "/v1/forecast" + cityId;
        const output = await axios.get(url);
        let data = output.data
        return data
    }
    /*
    Si estás familiarizado con el ciclo de vida de las clases de React y sus métodos, 
    el Hook useEffect equivale a: 
    componentDidMount, componentDidUpdate y componentWillUnmount combinados.  
    */

    /*
    useEffect(() => {   
        console.log("constructor didmount?") 
        setDataWeather("");
        // eslint-disable-next-line
    }, []);
    */

    useEffect(
        () => {
            const setDataWeather = async (cityId) => {
                try{
                    let reswet = await getWeather(cityId);
                    if (reswet.cod === 0 && reswet.entity){
                        setWeatherData(reswet.entity);
                    }
                    let resfore = await getForeCast(cityId);
                    if (resfore.cod === 0 && resfore.entity && resfore.entity.list){
                        setForeCastData(resfore.entity.list);
                        if (resfore.entity.city && resfore.entity.city.name)
                        setForeCastCity(resfore.entity.city.name);
                    }       
                    setWeatherLoading(false);
                    setForeCastLoading(false);
                } catch(err){
                    console.log('setDataWeather err',err);
                    setWeatherLoading(false);
                    setForeCastLoading(false);
                    setError(true);
                }
            
            }            
            const propCityId = props.cityId;
            if (propCityId !== cityId){
                setWeatherData({});
                setForeCastCity("");
                setForeCastData([]);
                setWeatherLoading(true);
                setForeCastLoading(true);                
                console.log("didupdate?-cityId:"+cityId+"-propCityId:"+propCityId);
                setCityId(propCityId);
                setDataWeather(propCityId);               
            }
        },
        [props,cityId]
    );
    if (huboError){
        return (
            <div className="error" >
                Hubo un error, por favor recargá la página.
                <br /><span className="error__sorry">Disculpe las molestias ocacionadas.</span>
            </div>
        );
    } else  {

        return (
            <Fragment>     
                <div className="main">             
                    <div className="main__header" >
                        <div className='main__weatherinfo' >
                            <Weather data={weatherData} isLoading={weatherLoading} ahora="(Ahora mismo)" ></Weather>
                        </div>
                        <div className='main__weathercity' >
                            {
                                (!forecastLoading) && (<span>Tiempo actual en<br/>{forecastCity}</span>)
                            }
                        </div>                        
                    </div>
                    {forecastLoading && (
                        <div className='main__loading' >
                            <img src={iconoLoading} alt="Cargando..." /><br />Cargando...
                        </div>
                    )}                     
                    {forecastData.length !== 0 && (
                        <Fragment>
                            <div className='main__text' >
                                Pron&oacute;stico extendido {forecastCity} (5 d&iacute;as)
                            </div>                        
                            <div className="main__forecast" >                       
                                {forecastData.map((item, index) => {
                                    return (
                                            <Weather key={index} data={item} isLoading={forecastLoading} ahora="" ></Weather>
                                    )
                                })}
                            </div>
                        </Fragment>
                        )
                    }
                </div>        
            </Fragment>
        );

    } 

};

export default WeatherContainer;