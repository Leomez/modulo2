import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return <div>
    <input type="text" placeholder='Ciudad...' />
    <input type="button" value="buscar" onClick={() => props.onSearch("London")} />
  </div>
}; 