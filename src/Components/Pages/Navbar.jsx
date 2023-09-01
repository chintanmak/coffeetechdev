import React from 'react';
import { Outlet, Link } from "react-router-dom";
import '../Pages/scss/_navbar.scss';
import logo from '../Assets/coffeetechlogo.png';
import Footer from './Footer';

export default function Navbar() {
  return (
    <>
    <div className='navbar_container'>
      <div className='logo_container'>
      <a href='/'><img src={logo} /></a>
      </div>

      <div className='menu_container'>
        <a href='/whycoffee'>why CoffeeTech?</a>
        <a href='/projects'>Projects</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
      </div>
    </div>

    <Outlet />
    <Footer />
    </>
  )
}
