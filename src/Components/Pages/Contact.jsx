import React from 'react';
import '../Pages/scss/_contact.scss';
import discussingcafe from '../Assets/discussingcafe.jpg';

export default function Contact() {
  return (
    <>
    <div className='contact_container'>
        <div className='contact_header'>
        <img src={discussingcafe} />
            <h1>Contact Us</h1>
        </div>
    </div>
    </>
  )
}
