import React from 'react';
import '../Pages/scss/_about.scss';
import businesspeople from '../Assets/businesspeople.jpg';

export default function About() {
  return (
    <>
    <div className='about_container'>
        <div className='about_header'>
            <img src={businesspeople} />
            <h1>About us</h1>
        </div>

        <div className='about_content'>

        </div>
    </div>
    </>
  )
}
