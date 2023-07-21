import React from 'react';
import {Link} from 'react-router-dom';
 import "../styles/Header.css";
 import { BsFillKeyFill } from "react-icons/bs";
 import { BiSolidRegistered } from "react-icons/bi";
 import Dropdown from 'react-bootstrap/Dropdown';
function Header() {
  return (
    <div className='container-fluid'>
      <div className='row head'>
        <div className='col-sm-1'></div>
        <div className='col-sm-5 py-3'>
          <img src="https://ilearnings.in/skin/frontend/ilearnings/default/images/logo.png"/><br/>
          <span className='ps-5 text-light '>Be a Technology expert</span>
        </div>
        <div className='col-sm-6 menu-main'>
          
          <Dropdown id='min'>
      <Dropdown.Toggle variant="" className='py-4 text-light mt-3'>
        <button style={{color:'white',background:'black'}}>Home</button>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/">Home</Dropdown.Item>
        <Dropdown.Item href="/about-us">AboutUs</Dropdown.Item>
        <Dropdown.Item href="/technologies">Technologies</Dropdown.Item>
        <Dropdown.Item href="/contact-us">Contact Us</Dropdown.Item>
      </Dropdown.Menu>  
    </Dropdown>
    <ul >
            <Link id="man"  to="/"><li className='w'>Home</li></Link>
            <Link id="man" to="/about-us"><li className='w'>About Us</li></Link>
            <Link id="man" to="/technologies"><li className='w'>Technologies</li></Link>
            <Link id="man" to="/contact-us"><li className='w'>Contact Us</li></Link>
           
            </ul>
            <Link to="/sign-in"><button className='but ms-3 mt-2'><BsFillKeyFill/>Sign In</button></Link>
            <Link to="/register"><button className='but ms-2 mt-2'><BiSolidRegistered/>Register</button></Link>
            {/* <Link to="/sign-in"><li className='w'>Sign In</li></Link>
            <Link to="/register"><li className='w'>R</li></Link>  */}
</div>  
      </div>
    </div>

  );
}

export default Header;


//


