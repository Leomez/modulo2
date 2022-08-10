import React from 'react';
import s from "../css/card.module.css";

export default function Card(props) {
  let { max, min, name, img, onClose } = props
  if (!props) {
    <h4>Loading...</h4>
  }

  return <div className={s.card}>            
              <button onClick = {onClose}>X</button>
              <h1>{name}</h1>
              <div>
                <h3>max</h3>
                <span>{max}</span>
              </div>
              <div>
                <h3>min</h3>
                <span>{min}</span>
              </div>
              <div><img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={`${name}`} /></div>            
          </div>
};