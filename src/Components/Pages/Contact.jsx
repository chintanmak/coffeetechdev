import React from 'react';
import '../Pages/scss/_contact.scss';
import projectsbg from '../Assets/projectsbg.jpg';

export default function Contact() {
  return (
    <>
    <div className='contact_container'>
        <div className='contact_header'>
        <img src={projectsbg} />
            <h1>Contact Us</h1>
        </div>
    </div>
    </>
  )
}
