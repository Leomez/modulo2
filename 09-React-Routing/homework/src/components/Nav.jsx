import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import { Link } from "react-router-dom";



function Nav({ onSearch }) {
  return (
    <nav className='navbar navbar-dark bg-dark fixed-top'>
      <Link to='/'>
        <span className="navbar-brand"><img src={Logo} alt="Logo Henry" /> Henry - Weather App</span>
      </Link>
      <Link to='/about'>
        <span>About</span>
      </Link>
      <div>
        <SearchBar
          onSearch={onSearch}
        />
      </div>
    </nav>

  )
};

export default Nav;
