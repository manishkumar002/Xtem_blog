import React, { useEffect }  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
function Test() {

  useEffect(()=>{
    AOS.init({
        duration:8000,
    })
},[])
  return (
    <div className="grand_parent">
      
      <div className="parents py-3">
        <div className="child">
        <div data-aos="zoom-out" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <span className='fs-5'>
          The arrival of Java 17
        </span>
        <hr/>
<p style={{textAlign:"justify",fontSize:'14px'}} className='p-2'>Java 17 is here: 14 JEPs with exciting new language and JVM features Oracle now offers JDK 17 for developers, end-users, and enterprises. As an LTS release, Oracle JDK 17 will receive performance, stability and security updates for at least 8 years following the Oracle Critical Patch Update (CPU) schedule as outlined in the Oracle Java SE Support Roadmap.<br/><br/>
<br/>
JDK 17 delivers context-specific deserialization filters. Care about new platforms? There’s now a version of the JDK for 64-bit Macs with the ARM Arch64 architecture
</p>
<Link to="blog-java">Read More</Link>
        </div>
        </div>
        <div className="child">
        <div data-aos="zoom-out" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
        <span className='fs-5'>SAP - An Overview and Introduction
</span>
<hr/>
<p style={{textAlign:"justify",fontSize:'14px'}} className='p-2'>
SAP stands for Systems Applications and Products in Data Processing. SAP, by definition, is also the name of the ERP (Enterprise Resource Planning) software as well as the name of the company.<br/><br/>

SAP system consists of a number of fully integrated modules, which covers virtually every aspect of business management.

<br/>
SAP is #1 in the ERP market. As of 2010, SAP has more than 140,000 installations worldwide, over 25 industry-specific business solutions and more than 75,000 customers in 120 countries.



</p>
<Link to="blog-spa">Read More</Link>
        </div>
        </div>
        <div className="child">
        <div data-aos="zoom-out" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
        <span className='fs-5'>Declarative Schema in Magento 2
</span>
<hr/>
<p style={{textAlign:"justify" ,fontSize:'14px'}} className='p-2'> <b>Declarative Schema</b> is relatively new feature introduced in Magento 2.3 and is a new way to make changes to the database.<br/>
<br/>

This new approach allows us to declare the final state of the database in an XML file (db_schema.xml) and the system automatically adjusts to it. Furthermore, when we uninstall the module, data will be deleted.
<br/>
<br/>
This replaces the use of various PHP classes like InstallSchema, UpgradeSchema, InstallData and UpgradeData.

</p>
<Link to="declarative">Read More</Link><br/><br/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Test