import React, { useState } from "react";
import s from './SearchBar.module.css';




export default function SearchBar({ onSearch }) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      // console.log(document.getElementById('ciudad').value);      
      onSearch(document.getElementById('ciudad').value);
      
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        id="ciudad"
      />
      <input className={s.button} type="submit" value="Agregar" />
    </form>
  );
}
