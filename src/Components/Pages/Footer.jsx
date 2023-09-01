import React from 'react';
import '../Pages/scss/_footer.scss';
import logo from '../Assets/coffeetechlogo.png'

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
            <a href='/whycoffee'> Why CoffeeTech</a>
            <a href=''> Pricing</a>
            <a href='/explore'> Explore</a>
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
            <a href='/about'> About Us</a>
            <a href='contact'> Contact us</a>
          </div>

          <div className='footer_list'>
            <p>Follow</p>
            <a href=''></a>
            <a href='https://twitter.com/CoffeeTechDev'> Twitter</a>
            <a href='https://www.instagram.com/coffeetechdev/'> Instagram</a>
            <a href='https://discord.gg/WCbscHNU'> Discord</a>
          </div>
        </div>
    </>
  )
}
