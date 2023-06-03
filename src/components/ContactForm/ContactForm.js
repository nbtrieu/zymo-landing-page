import React from 'react'

export default function ContactForm() {
  return (
    <div className='flex-column flex-center text-center subheading'>
      <h1>Form</h1>
      <div className='flex-row flex-center mb-3'>
        <div className='col-2 text-left ml-10'>
          <h3>First Name</h3>
          <input type='text'/>
        </div>
        <div className='col-2 text-left ml-negative-2-5'>
          <h3>Last Name</h3>
          <input type='text'/>
        </div>
      </div>
      <div className='flex-row flex-center mb-3'>
        <div className='col-2 text-left ml-10'>
          <h3>Company</h3>
          <input type='text'/>
        </div>
        <div className='col-2 text-left ml-negative-2-5'>
          <h3>Role</h3>
          <input type='textarea'/>
        </div>
      </div>
      <div className='flex-row flex-center mb-2'>
        <div className='col-1 text-left ml-3 comment-box'>
          <h3>Additional Comments</h3>
          <input type='textarea'/>
        </div>
      </div>
      <div className='flex-row flex-center mb-2'>
        <button>
          Submit
        </button>
      </div>
      
    </div>
  )
}
