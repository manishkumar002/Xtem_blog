
import React, { useState } from 'react';
import "../styles/Signin.css";
export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Perform form validation
    const validationErrors = {};
  
    if (!email) {
      validationErrors.email = 'Email is required';
    }
  
    if (!password) {
      validationErrors.password = 'Password is required';
    }
  
    // Set the validation errors state
    setErrors(validationErrors);
  
    // If there are no validation errors, proceed with form submission
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form data or perform further actions
    }
  };
  return (
    <div className='container-fluid'>
      <div className='row sin'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4 sbox'>
          <p className='box1'>SIGN IN</p>
          <span>Sign In to Your iLearnings Account !</span><br/><br/>
          <form onSubmit={handleSubmit}>
            <input
              type='email'
              placeholder='*Email Address'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}<br/>
  
            <input
              type='password'
              placeholder='*Password'
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error">{errors.password}</span>}<br/>
  
            <center>
            <center><button style={{background:'#454dda',color:'white',borderRadius:'5px',height:'40px',width:'100px'}}>Submit</button></center><br/>
              <b>Forgot Password?</b>
            </center>
          </form>
          <p className='box2'>Don't have an account?<b> Register Yourself</b></p>
        </div>
        <div className='col-sm-4'></div>
      </div>
    </div>
  );
}  