import React, { useState } from "react";
import s from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  let [ciudad, setCiudad] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      // console.log(document.getElementById('ciudad').value);      
      onSearch(ciudad);
      setCiudad('')
    }}>
      <div className="input-group mb-1">
      <input
        className=""
        type="text"
        placeholder="Ciudad..."
        id="ciudad"
        value={ciudad}
        onChange={e => setCiudad(e.target.value)}        
        />
        <div className="input-group-append">
          <input className={s.button} type="submit" value="Agregar" />
        </div>


      </div>
    </form>        
  );
}
