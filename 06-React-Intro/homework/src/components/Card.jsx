import React from 'react';

export default function Card(props) {
  // acá va tu código
  // console.log(props);

  return <div>
    <button onClick={props.onClose}>X</button>
    <h2>{props.name}</h2>
    <div>
      <p>Min {props.min}</p>
      <p>Max {props.max}</p>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={props.img} />
    </div>
  </div>
};