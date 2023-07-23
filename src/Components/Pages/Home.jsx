import React from 'react';
import './scss/_home.scss';
import headerpic from '../Assets/headerpic.jpg'
import design from '../Assets/design.jpg';
import software from '../Assets/software.jpg';
import responsive from '../Assets/responsive.jpg';
import discordbanner from '../Assets/discordbanner.jpeg';


export default function Home () {
  return (
    <>
      <div className='header_container'>
        <div className='header_titles gap2rem'>
          <h1>
            Let's build the future of design together
          </h1>
          <p>Create amazing tools and integrations for nearly 2 million users or customise coffeetech for your team.</p>
          <div className='headerbtn gap2rem'>
          <button className='btn btn-active'>View the docs</button>
          <a href='/discordinvite'><button className='btn'>Join us on Discord</button></a>
          </div>
        </div>

        <div className='header_image'>
          <img src={headerpic} />
        </div>
      </div>

      <div className='ourservices_header gap2rem'>
        <h1>Experience the freedom to build features, right away.</h1>
        <p>As a web development company, we specialize in creating unique and custom websites that are tailored to the needs of our clients. Our team of experienced developers and designers work closely with you to ensure that your website is not only functional, but also aesthetically pleasing and user-friendly.</p>
      </div>

      <div className='services_container'>
        <div className='service_section gap2rem'>
          <img src={design} />
          <h3>Website design</h3>
        </div>
        <div className='service_section gap2rem'>
          <img src={software} />
          <h3>Software development</h3>
        </div>
        <div className='service_section gap2rem'>
          <img src={responsive} />
          <h3>Responsive design</h3>
        </div>
      </div>

      <div className='discordinvite_container gap2rem'>
        <div className='discord_title gap2rem'>
          <h3>Showcase your app in our Community.</h3>
          <p>Building something special? We're always looking to work with partners who wants to help the world bring their ideas to life.</p>
          <div className='discordbtns gap2rem'>
          <button className='btn btn-active'>Become a partners</button>
          <a href='/discordinvite'><button className='btn'>Join</button></a>
          </div>
        </div>

        <div className='discordbaner'>
          <img src={discordbanner} />
        </div>
      </div>

    </>
  )
}
