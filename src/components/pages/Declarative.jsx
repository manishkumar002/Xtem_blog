import React from 'react'
import "../styles/Declarative.css";
import { Link } from 'react-router-dom';
export default function Declarative() {
  return (
    <div>
      <div className='container-fluid m'>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-10 py-5'>
         <div className='row '>
          <div className='col-sm-12 dtop'>
          <p>Home >> Blog >> <i>Declarative Schema in Magento 2</i></p>
          </div>
         </div>
         <div className='row '>
          <div className='col-sm-12 dtop1 py-3'>
           <div className='dtop2 p-3'>
            <center><h4 style={{fontFamily:'sans-serif'}}>DECLARATIVE SCHEMA IN MAGENTO 2</h4></center>
            <hr/>
            <span>
     <b>Declarative Schema</b>is relatively new feature introduced in Magento 2.3 and is a new way to make changes to the database<br/><br/>
     This new approach allows us to declare the final state of the database in an XML file (db_schema.xml) and the system automatically adjusts to it. Furthermore, when we uninstall the module, data will be deleted<br/><br/>
     This replaces the use of various PHP classes like InstallSchema, UpgradeSchema, InstallData and UpgradeData.<br/><br/>
     <b>Why declarative schema?</b><br/><br/>
    
     Before declarative schema, developers had to write PHP scripts for:<br/><br/>
<ol>
    <li> Installing and updating the schema</li>
    <li>Installing and updating data. </li>
    <li> Managing other operations when Magento was installed or upgraded.</li>
    <li> IWhat is SAP ERP? Why is it Required?</li>

</ol>
Whenever setup upgrade runs, Magento goes through all versions of the module until the latest version is reached. It looks like this for a particular module:<br/><br/>

<ol>

<li>1.0.0 create database schema (install table X)</li>
<li>1.0.1 update database schema (add column A to table X)</li>
<li>1.0.2 update database schema (remove column A from table X)</li>
<li>1.0.3 update database schema (add column B to table X)</li>

</ol>


and so on. In this case, developer had to fully understand what each install 
and upgrade script contained. Also, the complexity increases as the version of
 the module increase. For example it is not possible to delete the column you 
 added earlier without increasing the module to a new version. This adds much 
 complexity for a developer to revisit all previous database scripts of the module to understand what changes to the schema or data 
were made in the previous versions. This adds the possiblity for errors.<br/><br/>
<b>Declarative Schema Configuration:</b><br/><br/>
The following types of scripts existed before Magento 2.3 introduced <b>declarative schema</b> approach:<br/><br/>
<ol>
    <li><b>InstallData</b> and <b>InstallSchema</b> scripts, which execute only the first time a module is installed.</li>
    <li><b>UpgradeData</b> and <b>UpgradeSchema</b> incremental scripts, which execute whenever a newer version of the module is found.</li>
    <li><b>Recurring</b> scripts, which are executed each time you install or upgrade Magento.</li>
</ol>
<br/><br/>



Each script iteratively adds changes. During the installation process, upgrade scripts apply only those changes that have not been applied yet.<br/><br/>

Whenever the setup upgrade command is run, it checks for the module.xml file for each module and compares the version mentioned in these files with the version currently installed (found in setup_module table).<br/><br/>

Declarative setup eliminates this type of unnecessary work. Using declarative schema, Magento determines the differences between the current table structure and what it should look like by checking only one XML file per module.<br/><br/>
Departments do not have access to information or data from other departments<br/><br/>
sing declartive schema approach, we can have full table definition managible from a single XML file. The file name should be db_schema.xml and it should be placed under<br/><br/>

The file content should look like below:<br/><br/>



Since it is a decentralized process, the Sales Team do not have any real-time information access to the productavailability. So they approach the Inventory department to check the availability of the product. This process takes time, and the customer chooses another vendor leading to loss of revenue and customer dissatisfaction.<br/><br/>

Now, suppose the product is out of stock, and the Sales Team approaches the Production Planning team to manufacture the product for future use. Production Planning Team checks the availability of the raw materials required.<br/><br/>

In a decentralized system, raw material information is stored separately by Production Planning as well as the Inventory Department. Thus, data maintenance cost (in this case, Raw Material) goes up.<br/><br/>

The raw material information is available in two different departments Inventory as well as Production Planning. When sales team check a particular raw material required to manufacture the product, it shows the raw material is available as per the inventory, but as per the database of the production planning team, the raw material is out of stock.

So, they go ahead and buy the raw material. Thus, material, as well as inventory cost, goes up.<br/><br/>

Once the raw material is available, the shop floor department suddenly realizes they are short of workers. They approach the HR, who in turn hire temporary employees at higher than market rates. Thus LABOR Cost Increases.<br/><br/>

The production planning department fails to update the finance department on the materials they have purchased. The finance department defaults the payment deadline set by the vendor causing the company loss of its reputation and even inviting a possible legal action.

These are just a few of many problems with decentralized systems.


     </span><br/><br/><br/>
     <div className='row n '>
            <div className='col-sm-4'><b>Magento:</b> <Link to="/magento">Declarative</Link></div>
            <div className='col-sm-4'><b>By:</b> Ashish Arora</div>
            <div className='col-sm-4'><b>Posted on:</b> Oct 06, 2021</div>

           
         </div><br/>
         <button>magento</button>
         <br/><br/>
         
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