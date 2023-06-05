import React from 'react'
import { useState } from 'react';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    company: '',
    role: '',
    comments: ''
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
    <section>
      <form onSubmit={handleFormSubmit}>
        <div className='flex-column flex-center text-center subheading'>
          <h1>Form</h1>
          <div className='form-wrapper'>
            <div className='flex-row flex-center form-rows'>
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
            <div className='flex-row flex-center mb-2 form-rows'>
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
                  type='text'
                  name='role'
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='flex-row flex-center mb-2 form-rows'>
              <div className='col-1 text-left comment-box'>
                <h3>Additional Comments</h3>
                <textarea 
                  type='text'
                  name='comments'
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className='submit-wrapper'>
            <div className='flex-row flex-center mb-2'>
              <button>
                Submit
              </button>
            </div>
            <div className='mb-3 message'>
              <p>{message}</p>
            </div>
          </div>
          
        </div>
      </form>
    </section>
    
    
  )
}
