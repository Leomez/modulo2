import React from 'react';
import s from '../css/searchBar.module.css';
export default function SearchBar(props) {
  // acá va tu código
  return <div>
    <input type="text" placeholder='Ciudad...' />
    <input className={s.button} type="button" value="buscar" onClick={() => props.onSearch("London")} />
  </div>
};