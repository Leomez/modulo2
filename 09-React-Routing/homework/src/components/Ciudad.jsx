import React from "react";
import s from "./Ciudad.module.css";
import sc from "./Card.module.css";



export default function Ciudad(props) {

    let { min, max, name, img, temp, wind, weather, onClose } = props;

    return <div>
        <div className={sc.card}>
            <button className={`btn btn-sm btn-danger`} onClick={onClose}><div>x</div></button>
            <div>
                <div className={s.name}>{name}</div>
                <div className="row">
                    <span>Min: {min}°</span>
                    <span>Max: {max}°</span>
                </div>
                <div className="row">
                    <span>{temp}°</span>
                    <span><p>{weather}</p><img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={weather} /></span>
                </div>
                <h3>Viento: {wind}km/h</h3>
            </div>
        </div>
    </div>
}