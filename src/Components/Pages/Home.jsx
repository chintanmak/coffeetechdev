import React from 'react';
import './scss/_home.scss';
import headerpic from '../Assets/headerpic.jpg'

export default function Home () {
  return (
    <>
      <div className='header_container flex-row'>
        <div className='header_titles flex-column gap2rem'>
          <h1>
            Let's build the future of design together
          </h1>
          <p>Create amazing tools and integrations for nearly 2 million users or customise coffeetech for your team.</p>
          <div className='gap2rem flex-row'>
          <button className='btn btn-active'>View the docs</button>
          <button className='btn'>Join us on Discord</button>  
          </div>
        </div>

        <div className='header_image'>
          <img src={headerpic} />
        </div>
      </div>

      <div className=''>

      </div>

    </>
  )
}
