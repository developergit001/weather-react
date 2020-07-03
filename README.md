###########################################################################################################
Gabriel Pablo Caraballo
Weather React App que consume nodejs api basado en https://openweathermap.org/api

Se realizo la solución frontend y backend completa.

Este proyecto https://github.com/developergit001/weather-react.git

backend en nodejs: https://github.com/developergit001/weathernodejs.git

###########################################################################################################
#Para installar y correr la app
 
npm install

npm start
###########################################################################################################

###########################################################################################################
#TESTING: En este caso se usa jest y react-test-renderer
###########################################################################################################
Todos los assertions estan en la siguiente ruta:
src/__testing__/all.test.js

#Para correr los tests usar:
npm test

Comandos utiles para el testing
Al correr npm test en la terminal se tienen opciones para correrlos, tocar la tecla "a" corre todos los test encontrados.

Ejemplo al correr npm test y luego opcion "a"

 PASS  src/__testing__/all.test.js
  √ Prueba de mock fake testing simulando ajax request (6ms)
  √ Unit Test fx getCentrigrados  (12ms)
  √ Componente Weather: imagen de icono de clima, bien armada (34ms)
  √ Test Weather component SNAPSHOT Test (16ms)
  √ Prueba de contenido Existe un mensaje de bienvenida en la app (27ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   2 passed, 2 total
Time:        3.608s


###########################################################################################################
#Ejemplo de opciones


No tests found related to files changed since last commit.

Press `a` to run all tests, or run Jest with `--watchAll`.


Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.
 
###########################################################################################################

###########################################################################################################
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
###########################################################################################################
