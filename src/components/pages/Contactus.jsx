


import React, { useState } from 'react';
import "../styles/Contactus.css";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    comment: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    const errors = validateForm(formData);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Form is valid, submit data or perform further actions
      console.log('Form data:', formData);
      // Reset form
      setFormData({
        name: '',
        email: '',
        telephone: '',
        comment: '',
      });
      setErrors({});
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email address';
    }

    if (!data.telephone.trim()) {
      errors.telephone = 'Telephone is required';
    } else if (!isValidTelephone(data.telephone)) {
      errors.telephone = 'Invalid telephone number';
    }

    if (!data.comment.trim()) {
      errors.comment = 'Comment is required';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Email validation logic
    // You can use a library like 'validator' or implement your own logic
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidTelephone = (telephone) => {
    // Telephone validation logic
    // You can use a library like 'validator' or implement your own logic
    return /^[0-9]{10}$/.test(telephone);
  };

  return (
    <div className='container-fluid'>
      <div className='row con'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4 box'>
          <p className='box1'>CONTACT US</p>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='*Name'
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
            <br />
            <input
              type='email'
              placeholder='*Email'
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
            <br />
            <input
              type='text'
              placeholder='*Telephone'
              className={`form-control ${errors.telephone ? 'is-invalid' : ''}`}
              name='telephone'
              value={formData.telephone}
              onChange={handleChange}
            />
            {errors.telephone && <div className='invalid-feedback'>{errors.telephone}</div>}
            <br />
            <textarea
              type='text'
              placeholder='*Comment'
              className={`form-control ${errors.comment ? 'is-invalid' : ''}`}
              name='comment'
              value={formData.comment}
              onChange={handleChange}
            />
            {errors.comment && <div className='invalid-feedback'>{errors.comment}</div>}
            <br />
            <p style={{color:'red'}}>* Required Fields</p>
            <center><button style={{background:'#454dda',color:'white',borderRadius:'5px',height:'40px',width:'100px'}}>Submit</button></center>
            <p className='box2'>You can also reach out to us on:<b> support@ilearnings.in</b></p>
          </form>
        </div>
      </div>
      </div>
  )
}
