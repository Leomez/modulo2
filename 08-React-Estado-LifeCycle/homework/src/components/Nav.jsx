import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({ onSearch }) {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <a className="navbar-brand">
        <span><img src={Logo} alt="Logo Henry" /></span>
        Henry - Weather App
      </a>
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
    </nav>

  )
};

export default Nav;
