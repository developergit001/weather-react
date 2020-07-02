
//Return the param x with trim regex applied.
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}
function getCentrigrados(gradosKelvin){
    //return (gradosF !== '')?(((gradosF - 32) * 5)/9):gradosF;
    return (gradosKelvin !== '')?(Number(gradosKelvin) - 273.15).toFixed(0):gradosKelvin;    
}
function getBackUrl(){
    return "http://localhost:8080";
}
module.exports = { 
    getCentrigrados,getBackUrl,myTrim
}