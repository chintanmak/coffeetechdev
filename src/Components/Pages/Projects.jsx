import React from 'react';
import '../Pages/scss/_projects.scss';
import Footer from './Footer';
import murakami from '../Assets/murakamiclone.vercel.app.jpeg';
import teamway from '../Assets/teamway-chintanmak.vercel.app.jpeg';
import neutrino from '../Assets/neutrino.vercel.app.jpg';
import bsns from '../Assets/bsnsss.jpg';
import konsultant from '../Assets/konsultantss.jpg';

export default function Projects() {
  return (
    <>
        <div className='project_container'>
          <div className='project_header'>
            <h1>Projects</h1>
          </div>

          <div className='projects_section'>
            <div className='project_boxs'>
              <a href=''> <img src={murakami} /></a>
            </div>

            <div className='project_boxs'>
              <a href=''> <img src={teamway} /></a>
            </div>

            <div className='project_boxs'>
              <a href=''> <img src={neutrino} /></a>
            </div>

            <div className='project_boxs'>
              <a href=''> <img src={bsns} /></a>
            </div>

            <div className='project_boxs'>
              <a href=''> <img src={konsultant} /></a>
            </div>

          
          </div>
        </div>

        <Footer />
    </>
  )
}
