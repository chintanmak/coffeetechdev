import React from 'react';
import '../Pages/scss/_navbar.scss';
import logo from '../Assets/newcofee.png';

export default function Navbar() {
  return (
    <>
    <div className='navbar_container'>
      <div className='logo_container'>
      <img src={logo} />
      </div>

      <div className='menu_container'>
        <a href=''>why Coffee?</a>
        <a href=''>About</a>
        <a href=''>Contact</a>
      </div>
    </div>
    </>
  )
}
