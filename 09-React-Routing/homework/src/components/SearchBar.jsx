import React, { useState } from "react";
import s from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [ciudad, setCiudad] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      // console.log(document.getElementById('ciudad').value);      
      onSearch(ciudad);
      
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        id="ciudad"
        value={ciudad}
        onChange={e => setCiudad(e.target.value)}
      />
      <input className={s.button} type="submit" value="Agregar" />
    </form>
  );
}
