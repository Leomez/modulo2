import React from "react";
import s from "./Ciudad.module.css";
import sc from "./Card.module.css";
import { Link } from "react-router-dom";


export default function Ciudad({ city }) {

    let { min, max, name, img, temp, wind, weather } = city;
    console.log(max);

    return <div className={`${sc.card} ${s.cardDescripcion}`} >
        <Link to={'/'}>
            <button className={`btn btn-sm btn-danger`}><div>x</div></button>
        </Link>
        <div>
            <h2 className={s.name}>{name}</h2>
            <div>
                <span className="col-sm-4 col-md-4 col-lg-4">Min: {min}°</span>
                <span className="col-sm-4 col-md-4 col-lg-4">Max: {max}°</span>
            </div>
            <div className="d-flex justify-content-center p-3">
                <h1>{temp}°</h1>
                <span>{weather}<img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={weather} /></span>
            </div>
            <h4>Viento: {wind}km/h</h4>
        </div>
    </div>

}