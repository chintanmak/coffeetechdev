import React from 'react';
import '../Pages/scss/_explore.scss';
import projectsbg from '../Assets/projectsbg.jpg';


export default function Explore() {
  return (
    <>
    <div className='explore_container'>
        <div className='explore_header'>
            <img src={projectsbg} />
            <h1>Explore</h1>
        </div>

        <div className='explore_content'>

        </div>
    </div>
    </>
  )
}
