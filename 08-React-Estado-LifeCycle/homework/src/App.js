import React, {useState} from 'react';
import s from './App.module.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import Header from "./components/Header";
// import SearchBar from './components/SearchBar.jsx';
import data from './data.js';

function App() {
  const [ciudades, setCiudades] = useState([]);

  function onSearch(ciudad) {
      const apiKey = 'edb7cd9d95f0e2116c5248dbf86f8f18';

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(d => d.json())
      .then(datos => {
        if (datos.main !== undefined) {
          const ciudad = {
            min: Math.round(datos.main.temp_min),
            max: Math.round(datos.main.temp_max),
            img: datos.weather[0].icon,
            name: datos.name,
            id: datos.id
          }
          console.log(ciudad)
          setCiudades(ciudades => [...ciudades, ciudad]);
          
        }else{
          console.log('Ciudad no encontrada');
        }
      })      

  }

  function onClose(id) {
    setCiudades(ciudades => ciudades.filter(c => c.id != id))
  }

  return (
    <div className={s.App}>
      <div>
        <Nav
          onSearch={onSearch}
        />
      </div>

      <div>
        <Header></Header>
      </div>

      <div className={s.cardsContainer}>
        <Cards
          cities={ciudades}
          onClose = {onClose}
        />
      </div>
    </div>
  );
}

export default App;