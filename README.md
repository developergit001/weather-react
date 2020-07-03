#weather-react

Weather React App que consume nodejs api basado en https://openweathermap.org/api

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

List of all countries
http://bulk.openweathermap.org/sample/

Icons:
https://openweathermap.org/weather-conditions
http://openweathermap.org/img/wn/10d@2x.png

to run the app
npm start

Testing: En este caso se usa jest y react-test-renderer

Todos los assertions estan en la siguiente ruta:
src/__testing__/all.test.js

Para correr los test usar:
npm test[ENTER]

