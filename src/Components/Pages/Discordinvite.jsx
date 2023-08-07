import React from 'react';
import './scss/_discordinvite.scss';
import projectsbg from '../Assets/projectsbg.jpg';


export default function Discordinvite() {
  return (
    <>
    <div className='joindiscord_container'>
        <div className='joindiscord_header'>
        <img src={projectsbg} />
            <h1>Join Us on Discord</h1>
        </div>

        <div className='invitebtn'>
        <a href='https://discord.gg/WCbscHNU'><button className='btn'>JOIN US ON DISCORD</button></a>
        </div>
    </div>
    </>
  )
}
