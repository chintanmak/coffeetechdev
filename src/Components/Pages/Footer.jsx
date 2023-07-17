import React from 'react';
import '../Pages/scss/_footer.scss';
import logo from '../Assets/newcofee.png'

export default function Footer() {
  return (
    <>
        <div className='footer_container flex-row'>
          <div className='first_logo flex column'>
          <img src={logo} />
          </div>

          <div className='footer_list flex-column'>
            <p>Platform</p>
            <a href='' > Why CoffeeTech</a>
            <a href='' > Enterprise</a>
            <a href='' > Pricing</a>
            <a href='' > Developer API</a>
            <a href='' > Explore</a>
          </div>

          <div className='footer_list flex-column'>
            <p>Features</p>
            <a href='' > Design</a>
            <a href='' > Prototype</a>
            <a href='' > Development</a>
            <a href='' > Handoff</a>
            <a href='' > Collaboration</a>
          </div>

          <div className='footer_list flex-column'>
            <p>Community</p>
            <a href='' > Blog</a>
            <a href='' > About Us</a>
            <a href='' > Contact us</a>
            <a href='' > Careers</a>
          </div>

          <div className='footer_list flex-column'>
            <p>Follow</p>
            <a href='' > Twitter</a>
            <a href='' > Instagram</a>
            <a href='' > GitHub</a>
            <a href='' > Facebook</a>
            <a href='' > Discord</a>
          </div>
        </div>
    </>
  )
}
