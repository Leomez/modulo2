import React from 'react';
import s from "./Cards.module.css";
import Card from './Card.jsx';

export default function Cards({ cities, onClose }) {
  if (cities) {
    console.log(cities);
    return (
      
      <div className={s.cards}>
        {cities.map(c => {
          console.log(c.id);
          return <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            key={c.id}
            id={c.id}
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
