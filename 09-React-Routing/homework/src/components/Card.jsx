import React from 'react';
import s from "./Card.module.css";
import {Link} from "react-router-dom";

export default function Card (props) {
  let {min, max, name, img, id, onClose} = props 
  return (
      <div className={`${s.card}`}>
        <div className={s.closeIcon}>
            {/* <button onClick={onClose} className="btn btn-sm btn-danger">X</button> */}
            <button className={`btn btn-sm btn-danger`}  onClick={onClose}><div>x</div></button>
        </div>
        <div className={s.cardBody}>
          <Link to={`/ciudad/${id}`}>
            <h2 className={s.cardTitle}>{name}</h2>          
          </Link>
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
              <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} width="80" height="80" alt={`${name}`} />
            </div>
          </div>
        </div>
      </div>
    );
};
