import React, { Fragment, useEffect, useState } from "react";
import WeatherContainer from "../weathercontainer";
import Error from "../error";
import Loading from "../loading";
import { getGeo } from '../utilities/utils';
import './style.css';

const Main = () => {
    const [geodata, setGeoData] = useState({"country":"","lat":"","lon":"","regionName":"","zip":"","ip":""});
    const [huboError, setError] = useState(false);
    const [geoLoading, setGeoLoading] = useState(true);
    const [cityId, setCityId] = useState("");
    
    const comboChange = (e) => {
        setCityId(e.target.value);
    }
    const setDataGeo = async () => {
        try{
            let resgeo = await getGeo();
            let geores = {cod:0,entity:resgeo.data}; //for compatibility purpose only
            if (geores.cod === 0 && geores.entity){
                let tmphash = {"country":"","lat":"","lon":"","regionName":"","zip":"","ip":""};
                tmphash.country =    (geores.entity.country)?      "Pais " + geores.entity.country:"";
                tmphash.lat =        (geores.entity.lat)?          "Latitud " + geores.entity.lat:"";
                tmphash.lon =        (geores.entity.lon)?          "Longitud " + geores.entity.lon:"";
                tmphash.regionName = (geores.entity.regionName)?   "Región " + geores.entity.regionName:"";
                tmphash.zip =        (geores.entity.zip)?          "Cod Postal " + geores.entity.zip:"";
                tmphash.ip =         (geores.entity.query)?        "IP " + geores.entity.query:"";
                setGeoData(tmphash);
            } else {
                setError(true);
            }
            setGeoLoading(false);
        } catch(err){
            console.log('setDataGeo err',err);
            setGeoLoading(false);
            setError(true);
        }
    
    }
    /*
    Si estás familiarizado con el ciclo de vida de las clases de React y sus métodos, 
    el Hook useEffect equivale a: 
    componentDidMount, componentDidUpdate y componentWillUnmount combinados.  
    */
    useEffect(() => {    
        setDataGeo();
        // eslint-disable-next-line
    }, []);

    if (huboError){
        return (
            <Error></Error>
        );
    } else  {

        return (
            <Fragment>     
                <div className="main">
                    <div className='main__text' >
                        Bienvenido, aqu&iacute; encontrar&aacute;s informaci&oacute;n del estado del clima.
                    </div>                
                    <div className="main__header" >
                        {geoLoading && (
                            <div className='main__geoinfo' >
                                <Loading></Loading>
                            </div>
                        )}
                        {!geoLoading && (
                            <div className='main__geoinfo' >
                                <div className='main__geotitle' >Tu (ip-api)</div>
                                <div className='main__geodata' >{geodata.country !== "" && geodata.country}</div>
                                <div className='main__geodata' >{geodata.lat !== "" && geodata.lat}</div>
                                <div className='main__geodata' >{geodata.lon !== "" && geodata.lon}</div>
                                <div className='main__geodata' >{geodata.regionName !== "" && geodata.regionName}</div>
                                <div className='main__geodata' >{geodata.zip !== "" && geodata.zip}</div>
                                <div className='main__geodata' >{geodata.ip !== "" && geodata.ip}</div>
                            </div>
                        )}
                        <div className='main__flags' >
                            Ciudad actual:<br />
                            <select onChange={comboChange} className="main_combo" value={cityId} >
                                <option value="" >Tu IP/Ubicaci&oacute;n</option>
                                <option value="5128581" >New York (US)</option>
                                <option value="3836564" >S.Sal de Jujuy (AR)</option>
                                <option value="2643743" >Londres (GB)</option>
                                <option value="3169070" >Roma (IT)</option>
                                <option value="6323121" >Florian&oacute;polis (BR)</option>
                            </select>
                        </div>
                    </div>                    
                </div>
                {
                    (!geoLoading && !huboError) &&
                    <WeatherContainer cityId={cityId} ></WeatherContainer>
                }
            </Fragment>
        );

    } 

};

export default Main;