import React from 'react';
import s from "./Cards.module.css";
import Card from './Card.jsx';

export default function Cards({ cities, onClose }) {
  if (cities) {
    console.log(cities[0].id);
    return (
      <div className={s.cards}>
        {cities.map(c => {
          console.log(c.id);
          return <Card
            max={c.main.temp_max}
            min={c.main.temp_min}
            name={c.name}
            img={c.weather[0].icon}
            onClose={() => onClose(c.id)}
            key={c.id}
          />

        }

        )}
      </div>
    );
  } else {
    return (
      <div>Sin ciudades</div>
    )
  }
}
