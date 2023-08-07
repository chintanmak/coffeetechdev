import React from 'react';
import '../Pages/scss/_whycoffee.scss';
import projectsbg from '../Assets/projectsbg.jpg';


export default function Whycoffee() {
  return (
    <>
        <div className='whycoffee_container'>
            <div className='whycoffee_header'>
              <img src ={projectsbg} />
                <h1>Why CoffeeTech?</h1>
            </div>
        </div>
    </>
  )
}
