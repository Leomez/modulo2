import React, { useState } from 'react';
import s from './App.module.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import Header from '../components/Header';
import { Route } from "react-router-dom";
import About from "../components/About";
import Ciudad from "../components/Ciudad";
const apiKey = 'edb7cd9d95f0e2116c5248dbf86f8f18';

function App() {
  const [ciudades, setCiudades] = useState([]);
  function onClose(id) {
    setCiudades(ciudades => ciudades.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=sp,es`)
      .then(d => d.json())
      .then((datos) => {
        console.log(datos);
        if (datos.main !== undefined) {
          const ciudad = {
            min: Math.round(datos.main.temp_min),
            max: Math.round(datos.main.temp_max),
            img: datos.weather[0].icon,
            id: datos.id,
            wind: datos.wind.speed,
            temp: datos.main.temp,
            name: datos.name,
            weather: datos.weather[0].description,
            clouds: datos.clouds.all,
            latitud: datos.coord.lat,
            longitud: datos.coord.lon
          };
          setCiudades(ciudades => [...ciudades, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = ciudades.filter(c => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <div className={s.App}>
      <Route path='/'
        render={() => <Nav onSearch={onSearch} />}
      />
      <Route path='/about' component={About}
      />
      <div>
        <Header></Header>
      </div>

      <Route path='/ciudades'
        render={() => <div className={s.cardsContainer}>
            <Cards
              cities={ciudades}
              onClose={onClose}
            />
          </div>
        }
      />

    </div>
  );
}

export default App;
