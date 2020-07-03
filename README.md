Weather React App que consume nodejs api basado en https://openweathermap.org/api

Se realizo la solución frontend y backend completa.

Este proyecto https://github.com/developergit001/weather-react.git

backend en nodejs: https://github.com/developergit001/weathernodejs.git

#Para correr la app
npm start

#Testing: En este caso se usa jest y react-test-renderer

Todos los assertions estan en la siguiente ruta:
src/__testing__/all.test.js

#Para correr los tests usar:
npm test[ENTER]


#Datos varios:
El backend de node estaria corriendo en http://localhost:8080 por defecto.

En esta ruta se puede cambiar el host si cambian el port del backend.
src\components\utilities\utils.js

endpoints usados (pedidos segun el challenge):

Current GEO Lat, Lon
http://localhost:8080/v1/location

Current Weather for your geo location
http://localhost:8080/v1/current

Current Weather for Argentina
http://localhost:8080/v1/current/3435907

Next 5 days Weather for your geo location
http://localhost:8080/v1/forecast

Next 5 days Weather for Argentina
http://localhost:8080/v1/forecast/3435907

Info adicional sobre openweathermap / enlaces de interes.

List of all countries
http://bulk.openweathermap.org/sample/

Icons example:
https://openweathermap.org/weather-conditions
http://openweathermap.org/img/wn/10d@2x.png

