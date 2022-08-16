import React from 'react';
import s from './App.module.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
// import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';

function App() {
  return (
    <div className={s.App}>
      <div>
        <Nav
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>

      <div className={`container ${s.contenedorTitulo}`}>
        <h1 className={`display-4 ${s.titulo}`}>Aplicacion del clima</h1>
        <p className={`lead ${s.subtitulo}`}>Home Work React 1</p>
      </div>

      <div className={s.card}>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div>

      <div className={s.cardsContainer}>
        <Cards
          cities={data}
        />
      </div>
    </div>
  );
}

export default App;