import React, { useState } from 'react'

function Form() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        dob: '',
      });
    
      const [errors, setErrors] = useState({
        username: false,
        email: false,
        phone: false,
        dob: false,
        emailFormat: false,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    
        setErrors({ ...errors, [name]: false, emailFormat: false });
      };
    
      const validate = () => {
        const newErrors = {
          username: !formData.username.trim(),
          email: !formData.email.trim(),
          phone: !formData.phone.trim(),
          dob: !formData.dob.trim(),
          emailFormat: !formData.email.includes('@') && formData.email.trim() !== '',
        };
    
        return newErrors;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
    
        if (validationErrors.emailFormat) {
            alert('Invalid email. Please check your email address.');
            return;
        }
        const phoneValid = /^\d{10}$/.test(formData.phone);

        const currentDate = new Date();
        const selectedDOB = new Date(formData.dob);
    
        if (selectedDOB > currentDate) {
          alert('Invalid date of birth. Date of birth cannot be in the future.');
          return;
        }
    
        if (!phoneValid) {
          alert('Invalid phone number. Please enter a 10-digit phone number.');
          return;
        }
    
        if (Object.values(validationErrors).includes(true)) {
          return;
        }
    

        console.log('Form Submitted Successfully:', formData);
        alert('Form submitted successfully!');
        setFormData({
          username: '',
          email: '',
          phone: '',
          dob: '',
        });
        setErrors({});
      };
    
      return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '30px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h2>Fill Details</h2>
          <form onSubmit={handleSubmit} noValidate>
     
            <div style={{ marginBottom: '15px' }}>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
              />
              {errors.username && (
                <span style={{ color: 'red', fontSize: '12px' }}>Please fill out this field</span>
              )}
            </div>
    

            <div style={{ marginBottom: '15px' }}>
              <label>Email Address:</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
              />
              {errors.email && (
                <span style={{ color: 'red', fontSize: '12px' }}>Please fill out this field</span>
              )}
              
            </div>
    

            <div style={{ marginBottom: '15px' }}>
              <label>Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
              />
              {errors.phone && (
                <span style={{ color: 'red', fontSize: '12px' }}>Please fill out this field</span>
              )}
            </div>
    

            <div style={{ marginBottom: '15px' }}>
              <label>Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
              />
              {errors.dob && (
                <span style={{ color: 'red', fontSize: '12px' }}>Please fill out this field</span>
              )}
            </div>
    

            <button className='submit-button'
              type="submit"
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '10px 15px',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '4px',
              }}
            >
              Submit
            </button>
          </form>
        </div>
      );
    };
export default Form;
