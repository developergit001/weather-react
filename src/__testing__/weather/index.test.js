import React from 'react';
import renderer from 'react-test-renderer';
import Weather from "../../components/weather";

test('Test Weather component SNAPSHOT Test', () => {
  
  //Componente vacio, esta cargando... sin datos, ERGO muestra una imagen de loading...
  const component1 = renderer.create(
    <Weather data={{}} isLoading={true} ahora="" ></Weather>,
  );
  let tree = component1.toJSON();
  expect(tree).toMatchSnapshot(); //Genera el snapshot / HTML

  //Siguiente snapshot

  //Componente con datos, en esta instancia el <img loading  > NO se muestra...
  //Datos tomados de openweatherapi
  const tweather = {"coord":{"lon":-58.53,"lat":-34.71},"weather":[{"id":803,"main":"Clouds","description":"nubes rotas","icon":"04d"}],"base":"stations","main":{"temp":284.13,"feels_like":280.54,"temp_min":283.15,"temp_max":284.82,"pressure":1020,"humidity":76},"visibility":10000,"wind":{"speed":4.1,"deg":290},"clouds":{"all":75},"dt":1593711132,"sys":{"type":1,"id":8237,"country":"AR","sunrise":1593687713,"sunset":1593723259},"timezone":-10800,"id":3436426,"name":"Aldo Bonzi","cod":200};
  const component2 = renderer.create(
    <Weather data={tweather} isLoading={false} ahora="(Clima actual)" ></Weather>,
  );

  tree = component2.toJSON();
  expect(tree).toMatchSnapshot(); //Generando segundo snapshot.

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