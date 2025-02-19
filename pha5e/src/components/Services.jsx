import React from 'react';
import './Services.css';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const Services = () => {
  return (
    <div id='maincon'>
      <div id='div1'>
        <div id='text'>
           <h4> Living an immersive journey rich in emotions adds flesh and bones and meaning to a digital experience that is all too often cold. Not only does this process perfectly embody the core values of the brand, but the message delivered has a longer, deeper and more positive influence on the user.
              <br />
              <br />

                  The bringing together of digital creativity and knowledge in neuroscience has written into the DNA of our studio an artisanal know-how at the service of high technology. Each project is imagined and produced on a tailor-made basis, with listening, precision, rigour, originality and pleasure.</h4>
        <br />
        <h4 style={{fontFamily:'monospace'}}><LiaLongArrowAltRightSolid />SEE MORE</h4>
        </div>
        
      </div>
      <div id='div2'>
        <div id='divt'>
        <h1 className='text2'>The more an</h1>
        <h1 className='text2'> experience is </h1>
        <h1 className='text2'>rich in </h1>
        <h1 className='text2'>meaning, the</h1>
        <h1 className='text2'> more its </h1>
        <h1 className='text2'>meaning is</h1>
        <h1 className='text2'> rich. </h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
