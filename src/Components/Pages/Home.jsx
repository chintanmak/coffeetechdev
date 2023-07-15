import React from 'react';
import './scss/_home.scss';
import headerpic from '../Assets/headerpic.jpg'
import design from '../Assets/design.jpg';
import software from '../Assets/software.jpg';
import responsive from '../Assets/responsive.jpg';

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

      <div className='ourservices_header flex-column gap2rem'>
        <h1>Experience the freedom to build features, right away.</h1>
        <p>As a web development company, we specialize in creating unique and custom websites that are tailored to the needs of our clients. Our team of experienced developers and designers work closely with you to ensure that your website is not only functional, but also aesthetically pleasing and user-friendly.</p>
      </div>

      <div className='services_container grid'>
        <div className='service_section flex-column gap2rem'>
          <img src={design} />
          <h3>Website design</h3>
        </div>
        <div className='service_section flex-column gap2rem'>
          <img src={software} />
          <h3>Software development</h3>
        </div>
        <div className='service_section flex-column gap2rem'>
          <img src={responsive} />
          <h3>Responsive design</h3>
        </div>
      </div>

    </>
  )
}
