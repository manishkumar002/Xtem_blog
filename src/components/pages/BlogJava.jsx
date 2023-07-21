import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/BlogJava.css";
export default function BlogJava() {
  return (
    <div>
      <div className='container-fluid m'>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-10 py-5'>
         <div className='row'>
          <div className='col-sm-12 jtop'>
          <p>Home >> Blog >> <i>The arrival of Java 17</i></p>
          </div>
         </div>
         <div className='row '>
          <div className='col-sm-12 jtop1 py-3'>
           <div className='jtop2 p-3'>
            <center><h4 style={{fontFamily:'sans-serif'}}>THE ARRIVAL OF JAVA 17</h4></center>
            <hr/>
     <b>Java 17 is here: 14 JEPs with exciting new language and JVM features</b><br/><br/>
     <span>
     Oracle now offers <b>JDK 17 </b>for developers, end-users, and enterprises. As an LTS release, Oracle JDK 17 will receive performance, stability and security updates for at least 8 years 
     following the Oracle Critical Patch Update (CPU) schedule as outlined in the Oracle Java SE Support Roadmap.<br/><br/>
There’s something in Java 17 for everyone. Want new language features? Check out sealed classes and the preview of pattern matching for switch. Looking for stronger security?
 JDK 17 delivers context-specific deserialization filters. Care about new platforms? There’s now a version of the JDK for 64-bit Macs with the ARM Arch64 architecture.<br/><br/>
How about years of stability? Java SE 17 is a Long-Term Support (LTS) release, just like Java 11 and Java 8. Officially, <b>Java 17’s birthday </b>(that is, when it’s generally available) is September 14, 2021, 
but its 14 JEPs have been visible, of course, for months. Developers have been playing with the source code and running the binaries, and many have contributed back comments, bug reports, and suggestions.<br/><br/>
<b>New in Java 17</b><br/><br/>
Along with thousands of performance, stability and security updates, Java 17 delivers <b style={{color:'blue'}}>fourteen enhancements/changes</b> (known as <b style={{color:'blue'}}>JDK Enhancement Proposals - JEPs</b>), including three delivered in incubator modules and one preview language feature.<br/>
<b style={{color:'blue'}}>Incubator modules</b> allow putting non-final APIs and non-final tools in the hands of developers and users to gather feedback that will ultimately improve the quality of the Java platform.<br/><br/><br/>
<b>1. Language Feature</b><br/><br/>
<b style={{color:'blue'}}>JEP 409:</b> Sealed Classes<br/><br/>
Sealed Classes allow API designers to specify which classes or interfaces may extend or implement a given class. Having an 
exhaustive list of cases to consider when modeling a problem can simplify development. JEP 409 was developed in the  <b style={{color:'blue'}}>OpenJDK Project Amber,</b> 
which aims to continually improve developer productivity through evolution of the Java programming language.<br/><br/>
<b>2. Updates and Improvements on Core Libraries</b><br/><br/>
<b style={{color:'blue'}}>JEP 306</b>: Restore Always-Strict Floating-Point Semantics<br/><br/>
The Java programming language and Java virtual machine originally only had strict floating-point semantics. Starting in JDK 1.2, small variances in those strict semantics 
were allowed by default to accommodate limitations of then-current hardware architectures. Those variances are no longer helpful or necessary and have been removed by JEP 306<br/><br/>.
<b style={{color:'blue'}}>JEP 356: </b>Enhanced Pseudo-Random Number Generator<br/><br/>
Updates to java.util.random improve the interoperability of different PRNGs (Pseudo-Random Number Generators) and make it easy to request an algorithm based on 
requirements rather than hard coding a specific implementation.  Changes include new interface types and implementations for pseudorandom number generators (PRNGs),
 including jumpable PRNGs and an additional class of splitable PRNG algorithms (LXM) and a new RandomGeneratorFactory class.<br/><br/>
 <b style={{color:'blue'}}>JEP 382</b>: New macOS Rendering Pipeline<br/><br/>
This new pipeline reduces the JDK’s dependency on the deprecated Apple OpenGL API by implementing a Java 2D rendering pipeline for macOS using the new Apple Metal API.<br/><br/>
<b style={{color:'blue'}}>JEP 415</b> Context-Specific Deserialization Filters<br/><br/>
Filter Incoming Serialization Data, added with JDK 9 (JEP 290), is improved by allowing applications to configure context-specific and dynamically-selected deserialization
 filters via a JVM-wide filter factory that is invoked to select a filter for each individual deserialization operation. This makes it possible to take advantage of deserialization
  filters without requiring every stream’s creator to update their code or making the filter too restrictive or too permissive<br/><br/>

  <b>3.New Platform Support</b><br/><br/>
  <b style={{color:'blue'}}>JEP 391</b>: macOS AArch 64 Port
Delivers a version of the JDK for macOS that runs natively on Apple’s newer Arm 64 based systems.<br/><br/>

<b>4. Previews and Incubators</b><br/><br/>
Filter Incoming Serialization Data, added with JDK 9 (JEP 290), is improved by allowing applications to configure context-specific and dynamically-selected deserialization
 filters via a JVM-wide filter factory that is invoked to select a filter for each individual deserialization operation. This makes it possible to take advantage of deserialization
  filters without requiring every stream’s creator to update their code or making the filter too restrictive or too permissive<br/><br/>

  Oracle now offers <b>JDK 17 </b>for developers, end-users, and enterprises. As an LTS release, Oracle JDK 17 will receive performance, stability and security updates for at least 8 years 
     following the Oracle Critical Patch Update (CPU) schedule as outlined in the Oracle Java SE Support Roadmap.<br/><br/>
There’s something in Java 17 for everyone. Want new language features? Check out sealed classes and the preview of pattern matching for switch. Looking for stronger security?
 JDK 17 delivers context-specific deserialization filters. Care about new platforms? There’s now a version of the JDK for 64-bit Macs with the ARM Arch64 architecture.<br/><br/>
How about years of stability? Java SE 17 is a Long-Term Support (LTS) release, just like Java 11 and Java 8. Officially, <b>Java 17’s birthday </b>(that is, when it’s generally available) is September 14, 2021, 
but its 14 JEPs have been visible, of course, for months. Developers have been playing with the source code and running the binaries, and many have contributed back comments, bug reports, and suggestions.<br/><br/>
     </span><br/><br/><br/>
     <div className='row n '>
            <div className='col-sm-4'><b>Posted in:</b> <Link to="/java">Java</Link></div>
            <div className='col-sm-4'><b>By:</b> Ashish Arora</div>
            <div className='col-sm-4'><b>Posted on:</b> Oct 06, 2021</div>
         </div><br/><br/>
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
