import React from 'react';
// import './Card.css';
import s from "./Card.module.css";

export default function Card (props) {
  let {min, max, name, img, onClose} = props 
  return (
      <div className={`${s.card}`}>
        <div className={s.closeIcon}>
            {/* <button onClick={onClose} className="btn btn-sm btn-danger">X</button> */}
            <button className={`btn btn-sm btn-danger`}  onClick={onClose}><div>x</div></button>
        </div>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <h5>Min</h5>
              <span>{min}°</span>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <h5>Max</h5>
              <span>{max}°</span>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={`http://openweathermap.org/img/wn/${img}@2x.png`} width="80" height="80" alt={`${name}`} />
            </div>
          </div>
        </div>
      </div>
    );
};
