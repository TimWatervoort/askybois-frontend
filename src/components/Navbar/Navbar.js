import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark py-2'>
      <Link to='/' className='text-white ask-navbar-brand mr-5'><h3 className='ask-navbar-brand'>Askybois</h3></Link>
      <button className='navbar-toggler' type='button' onClick={() => setIsOpen(!isOpen)}>
        <span className='navbar-toggler-icon' />
      </button>
      <div className={`${isOpen ? '' : 'collapse'} navbar-collapse`} id='navbarItems'>
        <ul className={`${isOpen ? 'pt-3' : ''} navbar-nav mr-auto`}>
          <li className='nav-item ml-5'><Link to='/' className='ask-nav text-white'><h3>HOME</h3></Link></li>
          <li className='nav-item ml-5'><Link to='/scores' className='ask-nav text-white'><h3>SCORES</h3></Link></li>
          <li className='nav-item ml-5'><Link to='/rules' className='ask-nav text-white'><h3>RULES</h3></Link></li>
          <li className='nav-item ml-5'><Link to='/contact' className='ask-nav text-white'><h3>CONTACT</h3></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
