import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Spa.css";
export default function Spa() {
  return (
   
      <div className='container-fluid m'>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-10 py-5'>
         <div className='row '>
          <div className='col-sm-12 s'>
          <p>Home >> Blog >> <i>SPA</i></p>
          </div>   
         </div>
         <div className='row '>
          <div className='col-sm-12 s1 py-3'>
           <div className=' row '>
           <div className='col-sm-12'>
            <div className=' row s2'>
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
        <div className='row s3'>
            <div className='col-sm-12'>
            <p style={{fontFamily:'sans-serif'}}>SAP - An Overview and Introduction</p>
            <hr/>
          <span>  SAP stands for Systems Applications and Products in Data Processing. SAP, by definition, is also the name of the ERP (Enterprise Resource Planning) software as well as the name of the company.<br/><br/>

SAP system consists of a number of fully integrated modules, which covers virtually every aspect of business management.<br/><br/>

SAP is #1 in the ERP market. As of 2010, SAP has more than 140,000 installations worldwide, over 25 industry-specific business solutions and more than 75,000 customers in 120 countries.</span><br/><br/>
      
         <div className='row '>
            <div className='col-sm-4'><b>Posted in:</b> <Link to='/spa'>Spa</Link></div>
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