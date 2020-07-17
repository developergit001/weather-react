###########################################################################################################
Gabriel Pablo Caraballo
Frontend Weather React App that consume nodejs api based on https://openweathermap.org/api

This is a complete (backend and frontend) solution.

Current project https://github.com/developergit001/weather-react.git

backend in nodejs: https://github.com/developergit001/weathernodejs.git

###########################################################################################################
#To install and run the app
 
npm install

npm start
###########################################################################################################

###########################################################################################################
#TESTING: We use jest y react-test-renderer
###########################################################################################################
All the assertions are in the next route:
src/__testing__/all.test.js

#To run the test you can run:
npm test

Commands for testing
When you run "npm test" in the terminal, you have the options, you can press the "a" key and run all the test at once.

Example when you run "npm test" and press "a" key/option

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
#Example of options


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
#Comments:
The backend in nodejs is running on http://localhost:8080 by default.

You can change the host/port here:
src\components\utilities\utils.js

Used endpoints:
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

Aditional info/links:

List of all countries
http://bulk.openweathermap.org/sample/

Icons example:
https://openweathermap.org/weather-conditions
http://openweathermap.org/img/wn/10d@2x.png
###########################################################################################################
