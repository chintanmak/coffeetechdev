import React from 'react';
import '../Pages/scss/_about.scss';
import projectsbg from '../Assets/projectsbg.jpg';

export default function About() {
  return (
    <>
    <div className='about_container'>
        <div className='about_header'>
            <img src={projectsbg} />
            <h1>About us</h1>
        </div>

        <div className='about_content'>

        </div>
    </div>
    </>
  )
}
