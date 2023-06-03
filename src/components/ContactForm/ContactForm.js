import React from 'react'

export default function ContactForm() {
  return (
    <div className='flex-column flex-center text-center subheading'>
      <h1>Form</h1>
      <div className='ml-6 mb-3'>
        <div className='flex-row flex-center'>
          <div className='col-2 text-left'>
            <h3>First Name</h3>
            <input type='text'/>
          </div>
          <div className='col-2 text-left'>
            <h3>Last Name</h3>
            <input type='text'/>
          </div>
        </div>
        <div className='flex-row flex-center mb-2'>
          <div className='col-2 text-left'>
            <h3>Company</h3>
            <input type='text'/>
          </div>
          <div className='col-2 text-left'>
            <h3>Role</h3>
            <input type='textarea'/>
          </div>
        </div>
        <div className='flex-row flex-center mb-2'>
          <div className='col-1 text-left comment-box'>
            <h3>Additional Comments</h3>
            <input type='textarea'/>
          </div>
        </div>
      </div>
      <div className='flex-row flex-center mb-3'>
        <button>
          Submit
        </button>
      </div>
    </div>
  )
}
