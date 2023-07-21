import React from 'react'
import "../styles/Java.css";
import { Link } from 'react-router-dom';
export default function Java() {
  return (
   
      <div className='container-fluid m'>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-10 py-5'>
         <div className='row j'>
          <div className='col-sm-12'>
          <p>Home >> Blog >> <i>Java</i></p>
          </div>   
         </div>
         <div className='row '>
          <div className='col-sm-12 j1 py-3'>
           <div className=' row '>
           <div className='col-sm-12'>
            <div className=' row j2'>
                <div className='col-sm-2 py-3'>
                <select>
                        <option>Created Ad</option>
                        <option>Added By</option>
                    </select><span style={{fontSize:'18px'}}>ꜜ</span>
                </div>
                <div className='col-sm-7'></div>
                <div className='col-sm-3 py-3'>
                    <b>1 Item(s)</b>:Show
                    <select>
                        <option>10</option>
                        <option></option>
                    </select>
                </div>
            </div><br/>
        <div className='row j3'>
            <div className='col-sm-12'>
            <p style={{fontFamily:'sans-serif'}}>The arrival of Java 17</p>
            <hr/>
           <span>Java 17 is here: 14 JEPs with exciting new language and JVM features Oracle now offers JDK 17 for developers, end-users, and enterprises. As an LTS release, Oracle JDK 17 will receive performance, stability and security updates for at least 8 years following the Oracle Critical Patch Update (CPU) schedule as outlined in the Oracle Java SE Support Roadmap.<br/><br/>

         JDK 17 delivers context-specific deserialization filters. Care about new platforms? There’s now a version of the JDK for 64-bit Macs with the ARM Arch64 architecture<br/><br/></span> 
      
         <div className='row '>
            <div className='col-sm-4'><b>Posted in:</b><Link to='/java'>Java</Link></div>
            <div className='col-sm-4'><b>By:</b> Ashish Arora</div>
            <div className='col-sm-4'><b>Posted on:</b> Oct 06, 2021</div>
         </div><br/><br/>

         <div className=' row j2'>
                <div className='col-sm-2 py-3'>
                <select>
                        <option>Created Ad</option>
                        <option>Added By</option>
                    </select><span style={{fontSize:'18px'}}>ꜜ</span>
                </div>
                <div className='col-sm-7'></div>
                <div className='col-sm-3 py-3'>
                <b>1 Item(s)</b>:Show
                    <select>
                        <option>10</option>
                        <option></option>
                    </select>
                </div>
            </div>
            </div>
        </div>
           </div>
           </div>
           </div>
          </div>
          <div className='col-sm-1'></div>
        </div>
      </div>
    </div>
  )
}