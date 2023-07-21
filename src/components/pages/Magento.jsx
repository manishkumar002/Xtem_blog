import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/Magento.css";
export default function Magento() {
  return (
   
      <div className='container-fluid m1'>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-10 py-5'>
         <div className='row m2'>
          <div className='col-sm-12'>
          <p>Home >> Blog >> <i>Tagged with "magento"</i></p>
          </div>   
         </div>
         <div className='row '>
          <div className='col-sm-12 m3 py-3'>
           <div className=' row '>
           <div className='col-sm-12'>
            <div className=' row m4'>
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
        <div className='row m5'>
            <div className='col-sm-12'>
            <p style={{fontFamily:'sans-serif'}}>Declarative Schema in Magento 2</p>
            <hr/>
          <span> <b> Declarative Schema </b>is relatively new feature introduced in Magento 2.3 and is a new way to make changes to the database.<br/><br/>

          This new approach allows us to declare the final state of the database in an XML file <b>(db_schema.xml)</b> and the system automatically adjusts to it. Furthermore, when we uninstall the module, data will be deleted.<br/><br/>

          This replaces the use of various PHP classes like InstallSchema, UpgradeSchema, InstallData and UpgradeData..</span><br/><br/>
      
         <div className='row '>
            
            <div className='col-sm-4'><b>Posted in:</b> <Link to='/magemto'>Majento</Link></div>
            <div className='col-sm-4'><b>By:</b> Ashish Arora</div>
            <div className='col-sm-4'><b>Posted on:</b> Oct 06, 2021</div>
            
         </div><br/><br/>

         <div className=' row m4'>
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