import React from 'react'
import "../styles/Aboutus.css";
export default function Aboutus() {
  return (
    <div>
      <div className='container-fluid py-4'>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-10'>
         <div className='row '>
          <div className='col-sm-12 top'>
          <p>Home >> <i>Aboutus</i></p>
          </div>
         </div>
         <div className='row '>
          <div className='col-sm-12 top1 py-3'>
          <span> <b> iLearnings</b> is an initiative taken up to fill up the gap between college campus and IT Industry. In today’s scenario where the whole IT Industry is transforming to advanced technologies, we should be technologically ready to grasp those new opportunities coming on the way.</span><br/><br/>

         <span>It is the<b> Campus to Corporate </b>program completely owned by Industry Experts to develop college students technologically sound so that they can easily align themselves with the current trends.</span><br/><br/>

         <b>Our Team</b><br/>
         <span>We have a team of working professionals on technologies like SAP, Data Science, Python, PHP, Oracle, Core and Advanced Java, ASP.Net. This team will be responsible for conducting all the sessions.</span><br/>

         <b>Training Process</b><br/>
       <img src="https://ilearnings.in/media/wysiwyg/about/training-process.png" className='w-100'/>
          </div>
         </div>
          </div>
          <div className='col-sm-1'></div>
        </div>
      </div>
    </div>
  )
}
