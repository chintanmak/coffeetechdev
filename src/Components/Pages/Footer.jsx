import React from 'react';
import '../Pages/scss/_footer.scss';
import logo from '../Assets/newcofee.png'

export default function Footer() {
  return (
    <>
        <div className='footer_container'>
          <div className='first_logo'>
          <img src={logo} />
          </div>

          <div className='footer_list'>
            <p>Platform</p>
            <a href=''></a>
            <a href='' > Why CoffeeTech</a>
            <a href='' > Pricing</a>
            <a href='' > Explore</a>
          </div>

          <div className='footer_list'>
            <p>Features</p>
            <a href=''></a>
            <a href='' > Design</a>
            <a href='' > Prototype</a>
            <a href='' > Development</a>
            <a href='' > Handoff</a>
          </div>

          <div className='footer_list'>
            <p>Community</p>
            <a href=''></a>
            <a href='' > Blog</a>
            <a href='' > About Us</a>
            <a href='' > Contact us</a>
          </div>

          <div className='footer_list'>
            <p>Follow</p>
            <a href=''></a>
            <a href='' > Twitter</a>
            <a href='' > Instagram</a>
            <a href='' > Discord</a>
          </div>
        </div>
    </>
  )
}
