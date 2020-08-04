import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark py-2'>
      <Link to='/' className='text-white ask-navbar-brand mr-5'><h3 className='ask-navbar-brand'>Askybois</h3></Link>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item ml-5'><Link to='/' className='ask-nav text-white'><h3>HOME</h3></Link></li>
          <li className='nav-item ml-5'><Link to='/scores' className='ask-nav text-white'><h3>SCORES</h3></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
