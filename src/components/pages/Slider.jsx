import React from 'react'
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
function Silder() {
  return (
    <div className='Container-fluid'>
    <Carousel>
      <Carousel.Item>
     
    <div className='row h'>
      <div className='col-sm-1'></div>
      <div className='col-sm-5 text-white'>
        <h4 className=" hp text-bold ">GET REAL EMPLOYABLE SKILLS
</h4>
<p>
Our quality curriculum is designed with top industry
 professionals, so you <br/>learn the high-impact <br/>

</p>
<br/> 

<Link to="/sign-in"><button className='btn btn-primary fs-5' style={
  {marginLeft:"50px",height:'50px', width:'150px'}
}>Get Started</button></Link>


      </div>
      <div className='col-sm-6'>   <img
          className="d-block w-100 "
          src="../images/si2.png"
    
        /></div>
    </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='row h'>
      <div className='col-sm-1'></div>
      <div className='col-sm-5 text-white' >
        <h4 className=" hp text-bold">LEARNING WITH INDUSTRY EXPERTS

</h4>
<p>
Our quality curriculum is designed with top industry
 professionals, so you<br/> learn the high-impact <br/>

</p>

<br/>
<Link to="/sign-in"><button className='btn btn-primary fs-5' style={
  {marginLeft:"50px",height:'50px', width:'150px'}
}>Get Started</button></Link>

      </div>
      <div className='col-sm-6'>   <img
          className="d-block w-100 "
          src="../images/si2.png"
    
        /></div>
    </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='row h'>
      <div className='col-sm-1'></div>
      <div className='col-sm-5 text-white'>
        <h4 className=" hp text-bold">GET REAL EMPLOYABLE SKILLS
</h4>
<p>
Our quality curriculum is designed with top industry
 professionals, so you<br/> learn the high-impact <br/>

</p><br/>
<Link to="/sign-in"><button className='btn btn-primary fs-5' style={
  {marginLeft:"50px",height:'50px', width:'150px'}
}>Get Started</button></Link>

      </div>
      <div className='col-sm-6'>   <img
          className="d-block w-100 "
          src="../images/si2.png"
    
        /></div>
    </div>
      </Carousel.Item>
    </Carousel>



    </div>
  )
}

export default Silder;