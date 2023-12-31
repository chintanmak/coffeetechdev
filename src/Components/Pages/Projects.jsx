import React from 'react';
import '../Pages/scss/_projects.scss';
import murakami from '../Assets/murakamiclone.vercel.app.jpeg';
import teamway from '../Assets/teamway-chintanmak.vercel.app.jpeg';
import neutrino from '../Assets/neutrino.vercel.app.jpg';
import bsns from '../Assets/bsnsss.jpg';
import konsultant from '../Assets/konsultantss.jpg';
import projectsbg from '../Assets/projectsbg.jpg';
import chintanmak from '../Assets/chintanmak.vercel.app.jpg';

export default function Projects() {
  return (
    <>
        <div className='project_container'>
          <div className='project_header'>
          <img src ={projectsbg} />
            <h1>Projects</h1>
          </div>

          <div className='projects_section'>
            <div className='project_boxs'>
              <a href='https://murakami-clone.vercel.app/'> <img src={murakami} /></a>
            </div>

            <div className='project_boxs'>
              <a href='https://teamway-nine.vercel.app/'> <img src={teamway} /></a>
            </div>

            <div className='project_boxs'>
              <a href='https://neutrino.vercel.app/'> <img src={neutrino} /></a>
            </div>

            <div className='project_boxs'>
              <a href='https://bsns-web.vercel.app/'> <img src={bsns} /></a>
            </div>

            <div className='project_boxs'>
              <a href='https://konsultant.vercel.app/'> <img src={konsultant} /></a>
            </div>

            <div className='project_boxs'>
              <a href='https://chintanmak.vercel.app/'> <img src={chintanmak} /></a>
            </div>
          
          </div>
        </div>

    </>
  )
}
