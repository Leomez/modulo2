import React from 'react';
import s from "../css/card.module.css";


export default function Card(props) {
  let { max, min, name, img, onClose } = props
  if (!props) {
    <h4>Loading...</h4>
  }

  return <div className={s.card}>    
    <button className={s.close} onClick={onClose}><div>x</div></button>
    <h1>{name}</h1>
    <div className={s.temp}>
      <div>
        <h5>max</h5>
        <span>{max}</span>
      </div>
      <div>
        <h5>min</h5>
        <span>{min}</span>
      </div>
    </div>
    <div><img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={`${name}`} /></div>
  </div>
};