import React from 'react';
import renderer from 'react-test-renderer';
import {render, cleanup, waitForElement} from '@testing-library/react';
import Weather from "../components/weather";
import { getCentrigrados, getWeather, getWeatherEndPoint } from '../components/utilities/utils';
import Main from '../components/main';

/*
If you want that all your tests (each one of them) use the fake mock axios 
then USE:
Choice A)
import mockAxios from "../__mocks__/axios"; //for global response with exact the same json inside here!

otherwise USE this 2 lines:

CHOICE B)
import axios from "axios";
jest.mock('axios');
*/

//CHOICE B)
import axios from "axios";
jest.mock('axios');


afterEach(cleanup);

/*
PRUEBAS: Este archivo tiene realizada todas las posibles pruebas a modo de ejemplo para la demo
  Tipos de pruebas: 
  Pruebas de snapshot para evaluar y verificar cambios de componentes a nivel UI.
  Pruebas unitarias, para evaluar resultados en funciones
  Pruebas usando mocks/fakes functions para emular peticiones ajax
  Pruebas de contenido a nivel arbol de dom, para evaluar si ciertos componentes contiene los datos esperados.
  Al realizar los dos desarrollos frontend en react y nodejs, el testing se realizó solo en este proyecto,
  ya que las pruebas de backend serian similares y en menor cantidad ya que sólo se hacen request en el back.
*/

it('Prueba de mock fake testing simulando ajax request', async () => {

  //Dato de respuesta emulado
  const resdata = {data:{"cod":0,"mockaxiostest":true,"entity":{"coord":{"lon":12.48,"lat":41.89},"weather":[{"id":800,"main":"Clear","description":"cielo claro","icon":"01d"}],"base":"stations","main":{"temp":295.62,"feels_like":296.88,"temp_min":294.26,"temp_max":298.15,"pressure":1011,"humidity":83},"visibility":10000,"wind":{"speed":3.1,"deg":130},"clouds":{"all":0},"dt":1593748201,"sys":{"type":1,"id":6792,"country":"IT","sunrise":1593747586,"sunset":1593802118},"timezone":7200,"id":3169070,"name":"Rome","cod":200}}};
  // setup
  /*
  //CHOICE A
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve(resdata)
  );
  */

  /*
  //First, by default the new mock axios return undefined, you must put a default data return.

  axios.get('https://www.google.com'); //undefined!!!
  const datos = await getWeather(cityId); //undefined too!!!
  */

  //Doing this we put a default value for mock
  axios.get.mockResolvedValue(
    resdata //The data that i must test
  );


  const cityId = "3169070"; //pasamos como city a Roma.
  let endpointurl = getWeatherEndPoint() + "/" + cityId;

  const datos = await getWeather(cityId);
  
  //console.log("mock result",datos); //Call the mock axios yeah!!!
  
  expect(datos).toEqual(resdata);
  
  //IF we use __mock__/axios.js in every test, replace the real axios for the fake one
  //__mock__/axios.js has a default data too, must be the correct want for every test, be carefull.
  //CHOICE A)
  //expect(mockAxios.get).toHaveBeenCalledTimes(1);
  //expect(mockAxios.get).toHaveBeenCalledWith(endpointurl /*,{params: {cityId:cityId}}*/);
  
  //CHOICE B) only for this test.
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith(endpointurl /*,{params: {cityId:cityId}}*/);

});

it('Unit Test fx getCentrigrados ', () => {
    //Conversion Kelvin 2 grados centigrados. (sin decimales)
    expect(getCentrigrados(283.15)).toBe("10");
});

//Datos basados de openweatherapi
const tweather = {"coord":{"lon":-58.53,"lat":-34.71},"weather":[{"id":803,"main":"Clouds","description":"nubes rotas","icon":"04d"}],"base":"stations","main":{"temp":284.13,"feels_like":280.54,"temp_min":283.15,"temp_max":284.82,"pressure":1020,"humidity":76},"visibility":10000,"wind":{"speed":4.1,"deg":290},"clouds":{"all":75},"dt":1593711132,"sys":{"type":1,"id":8237,"country":"AR","sunrise":1593687713,"sunset":1593723259},"timezone":-10800,"id":3436426,"name":"Aldo Bonzi","cod":200};

it("Componente Weather: imagen de icono de clima, bien armada",()=>{

  const imgurl = 'http://openweathermap.org/img/wn/' + tweather.weather[0].icon + '@2x.png';
  const {getByTestId} = render(<Weather data={tweather} isLoading={false} ahora="(Clima actual)" ></Weather>)
  expect(getByTestId("icon-weather-img").getAttribute("src")).toBe(imgurl);

});

it("Test Weather component SNAPSHOT Test",()=>{

    //PRIMER SNAPSHOT
    //Componente vacio, esta cargando... sin datos, ERGO muestra una imagen de loading...
    const component1 = renderer.create(
      <Weather data={{}} isLoading={true} ahora="" ></Weather>,
    );
    let tree = component1.toJSON();
    expect(tree).toMatchSnapshot(); //Genera el snapshot / HTML
  
    //SIGUIENTE SNAPSHOT
    //Componente con datos, en esta instancia el <img loading  > NO se muestra...  
    const component2 = renderer.create(
      <Weather data={tweather} isLoading={false} ahora="(Clima actual)" ></Weather>,
    );
  
    tree = component2.toJSON();
    expect(tree).toMatchSnapshot(); //Generando segundo snapshot.
  
});

it('Prueba de contenido Existe un mensaje de bienvenida en la app', async () => {
    const { getByText } = render(<Main />);
    //const linkElement = getByText(/Bienvenido/i);
    const linkElement = await waitForElement(() => getByText(/Bienvenido/i));
    expect(linkElement).toBeInTheDocument();
});

/*
SIN USO
test('Test Weather component SNAPSHOT Test', () => {
  //Cosas que podriamos hacer con el tree DOM, por ejemplo llamar a una funcion, en nuestro caso este componente no hace nada.
  //Pero podria darse el caso que un evento onMouseEnter cambie el class de un HTML y queremos ver si se impacta.
  
  // manually trigger the callback
  //tree.props.onMouseEnter();
  // re-rendering
  //tree = component.toJSON();
  //expect(tree).toMatchSnapshot();

  // manually trigger the callback
  //tree.props.onMouseLeave();
  // re-rendering
  //tree = component.toJSON();
  //expect(tree).toMatchSnapshot();

});
*/