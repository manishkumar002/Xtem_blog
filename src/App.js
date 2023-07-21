import React from "react";
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/pages/Header"
import Home from "./components/pages/Home"
import Aboutus from "./components/pages/Aboutus";
import Technologies from "./components/pages/Technologies";
import Contactus from "./components/pages/Contactus";
import Signin from "./components/pages/Signin";
import Register from "./components/pages/Register";
import BlogJava from "./components/pages/BlogJava";
import BlogSpa from "./components/pages/BlogSpa";
import Declarative from "./components/pages/Declarative";
import Java from "./components/pages/Java";
import Spa from "./components/pages/Spa";
import Magento from "./components/pages/Magento";
 import Footer from "./components/pages/Footer";
export default function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<Aboutus/>}/>
        <Route path="/technologies" element={<Technologies/>}/>
        <Route path="/contact-us" element={<Contactus/>}/>
        <Route path="/sign-in" element={<Signin/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/blog-java" element={<BlogJava/>}/>
        <Route path="/blog-spa" element={<BlogSpa/>}/>
        <Route path="/declarative" element={<Declarative/>}/>
        <Route path="/java" element={<Java/>}/>
        <Route path="/spa" element={<Spa/>}/>
        <Route path="/magento" element={<Magento/>}/>
        
       
      </Routes><br/><br/>
      <Footer/>
       </BrowserRouter> 
    </>
  )
}
