import React from 'react';
import {Link} from 'react-router-dom'
 function Footer() {
    
return (
    <div className='container-fluid'>
      <div className='row foot'>
        <div className='col-sm-1'></div>
        <div className='col-sm-6'>
       <i className='text-light'>@ 2021 iLearnings.in All Rights Reserved </i>
        </div>
        
        <div className='col-sm-5 '>
        <ul className='d' >
            <Link id="man"  to="/"><li className='w'>Home</li></Link>
            <Link id="man" to="/about-us"><li className='w'>About Us</li></Link>
            <Link id="man" to="/technologies"><li className='w'>Technologies</li></Link>
            <Link id="man" to="/contact-us"><li className='w'>Contact Us</li></Link>
            </ul>
        </div>
      </div>
    </div>
  
  )
 }

export default Footer;