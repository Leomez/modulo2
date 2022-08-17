import React from "react";
import s from './Header.module.css'



export default function Header() {
    return<div className={`container ${s.contenedorTitulo}`}>
        <h1 className={`display-4 ${s.titulo}`}>Aplicacion del clima</h1>
        <p className={`lead ${s.subtitulo}`}>Home Work React 1</p>
    </div>
}