import React from 'react'
import { useState } from 'react';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    company: '',
    role: ''
  });

  const [message, setMessage] = useState();

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      setFormState('');
      setMessage('Your submission was successful.');
      setTimeout(() => {
        setMessage('');
        event.target.reset();
      }, 5000);

    } catch (error) {
      console.error('>>> handleFormSubmit error: ', error);
      setMessage(`Form was not submitted. ${error.message}`)
    }
  }
  
  return (
    <form onSubmit={handleFormSubmit}>
      <div className='flex-column flex-center text-center subheading'>
        <h1>Form</h1>
        <div className='ml-6 mb-3'>
          <div className='flex-row flex-center'>
            <div className='col-2 text-left'>
              <h3>First Name</h3>
              <input 
                type='text'
                name='firstName'
                required
                onChange={handleInputChange}
              />
            </div>
            <div className='col-2 text-left'>
              <h3>Last Name</h3>
              <input 
                type='text'
                name='lastName'
                required
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='flex-row flex-center mb-2'>
            <div className='col-2 text-left'>
              <h3>Company</h3>
              <input 
                type='text'
                name='company'
                required
                onChange={handleInputChange}
              />
            </div>
            <div className='col-2 text-left'>
              <h3>Role</h3>
              <input 
                type='textarea'
                name='role'
                required
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='flex-row flex-center mb-2'>
            <div className='col-1 text-left comment-box'>
              <h3>Additional Comments</h3>
              <input type='textarea'/>
            </div>
          </div>
        </div>
        <div className='flex-row flex-center mb-2'>
          <button>
            Submit
          </button>
        </div>
        <div className='mb-3 message'>
          <p>{message}</p>
        </div>
      </div>
    </form>
    
  )
}
