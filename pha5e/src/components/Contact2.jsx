import React from 'react'
import './Contact2.css';
import png from '../images/award.png'
import fwapng from '../images/fwa.svg'
import last from '../images/last.png'

function Contact2() {
  return (
    <div id='lastcon'>
        <div className='divsss'>
            <h4>Our Distinctions</h4>
        </div>
        <div className='divsss2'>
            <img src={png} alt="ss" height="84" width="74" />
            <img src={fwapng} alt="ss" height="184" width="174" />
            <img src={last} alt="ss" height="84" width="74" />
        </div>
        <div className='divsss3'>
            <div id='d-divsss3'>
            <h4 id='h'>The awards received are testimony to the recognition</h4>
            <h4>of the cutting-edge know-how and high standards of our studio.</h4>
        </div>
        </div>
    </div>
  )
}

export default Contact2