import React from "react";
import s from "./About.module.css";
import sc from "./Card.module.css";

export default function About() {
    return <div className={sc.card}>
        <span><h3>Mi nombre: Leonardo Meza </h3></span>
        <span><h3>Nombre del proyecto: Aplicacion de clima</h3></span>
        <div>
            <h4>Descripcion</h4>
            <p>Este proyecto fue realizado mientras me encotraba cursando en modulo N°2 del bootcamp de Desarrollo Web Full Stack de Henry</p>
            <p>En este proyecto pude aplicar tecnologias y herramientas como React, React router, Redux, ademas de los lenguajes basicos para el desarrollo del Fron end como HTML5, CCS3 y JS.</p>
            <p>La app es una SPA, es decir <strong>Single Page Aplication</strong> hecha integramente en componentes de React navegables por medio de rutas realizadas con React router. Consume datos extraidos de la API de OpenWeather <a href="https://openweathermap.org/"></a> </p>
        </div>
    </div>
}