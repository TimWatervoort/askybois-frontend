import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <Link to='/' className='navbar-brand ask-header'><h3>Askybois</h3></Link>
    </nav>
  )
}

export default Navbar;
