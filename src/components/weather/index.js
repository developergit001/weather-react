import React, { Fragment } from 'react';
import { getCentrigrados } from '../utilities/utils';
//import moment from 'moment';
import moment from 'moment';
import 'moment/locale/es' 
import iconoLoading from '../../assets/Rolling-1s-200px.svg';
import './style.css';

function Weather(props) {
    const data = props.data;
    const ahora = props.ahora;

    let tweather = {"dt":"","humidity":"","temp":"","temp_max":"","temp_min":"","cityname":"","description":"","icon":""};
    if (data.dt){
        tweather.dt = (data.dt)?data.dt:"";
        tweather.humidity = (data.main && data.main.humidity)?data.main.humidity:"";
        tweather.temp = (data.main && data.main.temp)?data.main.temp:"";
        tweather.temp_max = (data.main && data.main.temp_max)?data.main.temp_max:"";
        tweather.temp_min = (data.main && data.main.temp_min)?data.main.temp_min:"";
        if (data.name){
            tweather.cityname = (<span>Tiempo en<br />{data.name}</span>);
        }
        tweather.cityname = null;
        tweather.description = (data.weather && data.weather[0] && data.weather[0].description)?data.weather[0].description:"";
        tweather.icon = (data.weather && data.weather[0] && data.weather[0].icon)?data.weather[0].icon:"";
    }
    const isLoading = props.isLoading;
    const grados = getCentrigrados(tweather.temp);
    let imgurl = (tweather.icon !== '')?'http://openweathermap.org/img/wn/' + tweather.icon + '@2x.png':null;
    let dateString = "";
    dateString = (tweather.dt !== "")?moment.unix(tweather.dt).format('dddd h:mm:ss'):dateString;
    if (ahora !== "")
    dateString = ahora;

    if (isLoading){
        return(
          <Fragment>
            <div className="weather">
              <img src={iconoLoading} alt="Cargando..." /><br />Cargando...
            </div>
          </Fragment>
        );
      } else {

        return (
            <Fragment>
                <div className="weather">
                    {(tweather.cityname !== "") &&
                        <div className="weather-header">
                            {tweather.cityname}
                        </div>
                    }
                    <div className="weather-body" >
                        <div className="weather-body__img" >
                            {(imgurl) && (<img src={imgurl} alt="weather icon" />)}
                        </div>
                        <div className="weather-body__degree" >
                            {grados}°
                        </div>                        
                    </div>
                    <div className="weather-footer" >
                        <div className="weather-footer__info">
                            {tweather.description}
                        </div>
                        <div className="weather-footer__date">
                            {dateString}
                        </div>                    
                    </div>                
                </div>
            </Fragment>
        );

      }

}
export default Weather;