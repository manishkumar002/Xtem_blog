import React, { useEffect, useState } from 'react'

function Register() {
    const [formValues, setFormValues] = useState({
        name: '',
        middle: '',
        last: '',
        email:'',
        number:'',
        password:'',
        confirm:'',
        massages: '',
        designation:'',
        technology:'',
        current:'',
        relevant:'',
        total:'',
      });
      const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };
    
      useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors, formValues, isSubmit]);
    
      const validate = (values) => {
        const errors = {};
    
        if (!values.name) {
          errors.name = <p style={{ color: 'red' }}>*Name is required</p>;
        }
        if (!values.middle) {
          errors.middle = <p style={{ color: 'red' }}>*Middle Name is required</p>;
        }
        if (!values.last) {
          errors.last = <p style={{ color: 'red' }}>*Last Name is required</p>;
        }
        if (!values.email) {
          errors.email= <p style={{ color: 'red' }}>*Email is required</p>;
        }
        if (!values.confirm) {
            errors.confirm= <p style={{ color: 'red' }}>*Confirm is required</p>;
          }
          if (!values.number) {
            errors.number= <p style={{ color: 'red' }}>*Mobile is required</p>;
          }
          if (!values.password) {
            errors.password= <p style={{ color: 'red' }}>*Password is required</p>;
          }
          if (!values.designation) {
            errors.designation= <p style={{ color: 'red' }}>* Designation is required</p>;
          }

          if (!values.technology) {
            errors.technology= <p style={{ color: 'red' }}>*Technology is required</p>;
          }
          if (!values.relevant) {
            errors.relevant= <p style={{ color: 'red' }}>*Relevant is required</p>;
          }
          if (!values.total) {
            errors.total= <p style={{ color: 'red' }}>*Total is required</p>;
          }
        return errors;
      };
      const handleStudentClick = () => {
        const studentForm = document.querySelector('#rigs');
        const trainerForm = document.querySelector('#rigs1');
    
        studentForm.style.display = 'block';
        trainerForm.style.display = 'none';
      };
    
      const handleTrainerClick = () => {
        const studentForm = document.querySelector('#rigs');
        const trainerForm = document.querySelector('#rigs1');
    
        studentForm.style.display = 'none';
        trainerForm.style.display = 'block';
      };
    
  return (
    <div className='Container-fluid py-5'>
    <div className='row'>
        <div className='col-sm-1'></div>
        <div className='col-sm-10 logo'>
            <div className='row'>
                <div className='col-sm-1'></div>
                <div className='col-sm-10 mt-4 logo1'>
                  <div className='row mt-2'>
                  <b style={{fontSize:"20px"}}>Please select if you want to register as a Student or Trainer?</b><br/>
                    <div className='col-sm-6 mt-2'>
                   
                    <input type='radio' onClick={handleStudentClick} name='userType' /><b>Student</b>
                    </div>
                    <div className='col-sm-6 mt-2'>
                   
                    <input type='radio' onClick={handleTrainerClick} name='userType' />  <b>Trainer</b>
                   </div>
                  </div>
                </div>
                <div className='col-sm-1'></div>
            </div>
        </div>
        <div className='col-sm-1'></div>
        <div className='row'>
            <div className='col-sm-1'></div>
       

            <div className='col-sm-10 register mt-3 ' id='rigs' >
         
                <p className='mt-3 rog'> STUDENT    REGISTRATION

</p>

<form onSubmit={handleSubmit}>
<fieldset>
<legend>Personal Details</legend>

<div className='row'>
    <div className='col-sm-4'>
    <input
              type='text'
              name='name'
              placeholder='*First Name'
              className='form-control mt-3'
              value={formValues.name}
              onChange={handleChange}
            />
            {formErrors.name && <p>{formErrors.name}</p>}
    </div>
    <div className='col-sm-4'>
    <input
              type='text'
              name='middle'
              placeholder='*Middle Name'
              className='form-control mt-3'
              value={formValues.middle}
              onChange={handleChange}
            />
            {formErrors.middle && <p>{formErrors.middle}</p>}
    </div>
    <div className='col-sm-4'>
    <input
              type='text'
              name='last'
              placeholder='*Last Name'
              className='form-control mt-3'
              value={formValues.last}
              onChange={handleChange}
            />
            {formErrors.last && <p>{formErrors.last}</p>}
    </div>
</div>
</fieldset>
<div className='row'>
    <div className='col-sm-6'>

    <input
              type='email'
              name='email'
              placeholder='*Email Address'
              className='form-control mt-3'
              value={formValues.email}
              onChange={handleChange}
            />
            {formErrors.email && <p>{formErrors.email}</p>}
    </div>
    <div className='col-sm-6'>
    <input
              type='number'
              name='number'
              placeholder='*Mobile Number'
              className='form-control mt-3'
              value={formValues.number}
              onChange={handleChange}
            />
            {formErrors.number && <p>{formErrors.number}</p>}
    </div>
</div>
<br/>
<fieldset className='fieldset'>
    <legend>Address Details
</legend>
<div className='row'>
    <div className='col-sm-4 mt-3'>
        <select className='form-control'>
            <option>Select State or Province </option>

            <option>Andaman Nicobar </option>
            <option>Andhra Pradesh </option>
            <option>Arunchan Pradesh </option>
            <option>Assam </option>
            <option>Bihar</option>
            <option>Chandigarh </option>
            <option>Chhattisgarh </option>
            <option>Dadra Nagar Haveli </option>
            <option>Daman Diu </option>
            <option>Delhi </option>
            <option>Goa </option>           
             <option>Gujarat </option>
             <option>Himachal Pradesh</option>
             <option>Jammu Kashmir </option>
             <option>Karntaka </option>
             <option>Kerala </option>
             <option>Lakshadweep </option>
        </select>
    </div>
    <div className='col-sm-4'>
        <input type='text' className='form-control mt-3'/>
    </div>
    <div className='col-sm-4'> 
    <input type='text' className='form-control mt-3' placeholder='College'/>
    </div>
</div>
</fieldset>
<br/>
<fieldset className='fieldset'>
    <legend>Address Details
</legend>
</fieldset>
<div className='row'>
<div className='col-sm-6'>
    <input
              type='number'
              name='password'
              placeholder='*Password'
              className='form-control mt-3'
              value={formValues.number}
              onChange={handleChange}
            />
            {formErrors.password && <p>{formErrors.password}</p>}
    </div>
    <div className='col-sm-6'>
    <input
              type='number'
              name='confirm'
              placeholder='*Confirm Password'
              className='form-control mt-3'
              value={formValues.confirm}
              onChange={handleChange}
            />
            {formErrors.confirm && <p>{formErrors.confirm}</p>}
    </div>
    <br/>
  
</div>
<br/>
<p className='text-danger

'>* Required Fields

</p>
<center>
              <button className='btn btn-primary'>Submit</button>
            </center>
            <br />
            <p className=' niche'>
            <center>
            Already have an account?<b> Sign In Here:</b> 
            </center>

            </p>
</form> 

            </div>
        

            <div className='col-sm-1'></div>
        </div>
    </div>
    <div className='row'>
            <div className='col-sm-1'></div>
       
            <div className='col-sm-10 register mt-3 ' id='rigs1'>
         
                <p className='mt-3 rog'> TRAINER   REGISTRATION

</p>

<form onSubmit={handleSubmit}>
<fieldset>
<legend>Personal Details</legend>

<div className='row'>
    <div className='col-sm-4'>
    <input
              type='text'
              name='name'
              placeholder='*First Name'
              className='form-control mt-3'
              value={formValues.name}
              onChange={handleChange}
            />
            {formErrors.name && <p>{formErrors.name}</p>}
    </div>
    <div className='col-sm-4'>
    <input
              type='text'
              name='middle'
              placeholder='*Middle Name'
              className='form-control mt-3'
              value={formValues.middle}
              onChange={handleChange}
            />
            {formErrors.middle && <p>{formErrors.middle}</p>}
    </div>
    <div className='col-sm-4'>
    <input
              type='text'
              name='last'
              placeholder='*Last Name'
              className='form-control mt-3'
              value={formValues.last}
              onChange={handleChange}
            />
            {formErrors.last && <p>{formErrors.last}</p>}
    </div>
</div>
</fieldset>
<div className='row'>
    <div className='col-sm-6'>

    <input
              type='email'
              name='email'
              placeholder='*Email Address'
              className='form-control mt-3'
              value={formValues.email}
              onChange={handleChange}
            />
            {formErrors.email && <p>{formErrors.email}</p>}
    </div>
    <div className='col-sm-6'>
    <input
              type='number'
              name='number'
              placeholder='*Mobile Number'
              className='form-control mt-3'
              value={formValues.number}
              onChange={handleChange}
            />
            {formErrors.number && <p>{formErrors.number}</p>}
    </div>
</div>
<br/>
<fieldset className='fieldset'>
    <legend>Professional Details
</legend>
<div className='row'>
    <div className='col-sm-4'>
    <input
              type='number'
              name='number'
              placeholder='*Designation'
              className='form-control mt-3'
              value={formValues.number}
              onChange={handleChange}
            />
            {formErrors.designation && <p>{formErrors.designation}</p>}
    </div>
    <div className='col-sm-4'>
    <input
              type='number'
              name='number'
              placeholder='*Technology'
              className='form-control mt-3'
              value={formValues.number}
              onChange={handleChange}
            />
            {formErrors.technology && <p>{formErrors.technology}</p>}
    </div>
    <div className='col-sm-4'> 
    <input
              type='number'
              name='number'
              placeholder='*Current Company'
              className='form-control mt-3'
              value={formValues.number}
              onChange={handleChange}
            />
            {formErrors.current && <p>{formErrors.current}</p>}
    </div>
</div>
<div className='row'>
  <div className='col-sm-6'>
  <input
              type='number'
              name='number'
              placeholder='*Relevant Experience (in Months)'
              className='form-control mt-3'
              value={formValues.number}
              onChange={handleChange}
            />
            {formErrors.relevant && <p>{formErrors.relevant}</p>}
  </div>
  <div className='col-sm-6'>
  <input
              type='number'
              name='number'
              placeholder='*Total Experience (In months)'
              className='form-control mt-3'
              value={formValues.number}
              onChange={handleChange}
            />
            {formErrors.total && <p>{formErrors.total}</p>}
  </div>
</div>
</fieldset>
<br/>
<fieldset className='fieldset'>
    <legend>Password Details
</legend>
</fieldset>
<div className='row'>
<div className='col-sm-6'>
    <input
              type='number'
              name='password'
              placeholder='*Password'
              className='form-control mt-3'
              value={formValues.number}
              onChange={handleChange}
            />
            {formErrors.password && <p>{formErrors.password}</p>}
    </div>
    <div className='col-sm-6'>
    <input
              type='number'
              name='confirm'
              placeholder='*Confirm Password'
              className='form-control mt-3'
              value={formValues.confirm}
              onChange={handleChange}
            />
            {formErrors.confirm && <p>{formErrors.confirm}</p>}
    </div>
    <br/>
  
</div>
<br/>
<p className='text-danger

'>* Required Fields

</p>
<center>
              <button className='btn btn-primary'>Submit</button>
            </center>
            <br />
            <p className=' niche'>
            <center>
            Already have an account?<b> Sign In Here:</b> 
            </center>

            </p>
</form> 

            </div>
            

            <div className='col-sm-1'></div>
        </div>
    </div>
  )
}

export default Register;