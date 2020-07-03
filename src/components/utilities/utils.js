import axios from "axios";

//Host del backend de nodejs
function getBackUrl(){
    return "http://localhost:8080";
}
function getGeoEndPoint(){
    return getBackUrl() + "/v1/location";
}
function getWeatherEndPoint(){
    return getBackUrl() + "/v1/current";
}
function getForeCastEndPoint(){
    return getBackUrl() + "/v1/forecast";
}
//endpoint pedido para usar con ip-api
const getGeo = async () => {
    let url = getGeoEndPoint();        
    return await axios.get(url);
}
//endpoint para obtener el tiempo actual segun el location o cityId
const getWeather = async cityId => {
    if (cityId !== "")
    cityId = "/" + cityId;
    let url = getWeatherEndPoint() + cityId;
    return await axios.get(url);   
};
//endpoint para obtener el pronóstico extendido de 5 dias segun el location o cityId
const getForeCast = async cityId => {
    if (cityId !== "")
    cityId = "/" + cityId;        
    let url = getForeCastEndPoint() + cityId;
    return await axios.get(url);
}
//Conversion Kelvin 2 grados centigrados. (sin decimales)
function getCentrigrados(gradosKelvin){
    //return (gradosF !== '')?(((gradosF - 32) * 5)/9):gradosF;
    return (gradosKelvin !== '')?(Number(gradosKelvin) - 273.15).toFixed(0):gradosKelvin;    
}
//Return the param x with trim regex applied.
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}
export { 
    getGeoEndPoint,getWeatherEndPoint,getForeCastEndPoint,getCentrigrados,getGeo,getWeather,getForeCast,myTrim
}