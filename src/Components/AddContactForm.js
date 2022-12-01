import React from 'react'

const AddContactForm = (props) => {
  return (
    <>
        <form className='addcontact-form'>
            <div className='p-4 border rounded-2'>
                <div className='form-group mb-3'>
                    <label className='form-label'>Name</label>
                    <input type='text' className='form-control' value={props.contactName} onChange={(e)=>props.setContactName(e.target.value)} placeholder='Enter Contact Name' />
                </div>
                <div className='form-group mb-3'>
                    <label className='form-label'>Phone</label>
                    <input type='number' className='form-control' value={props.contactPhone} onChange={(e)=>props.setContactPhone(e.target.value)} placeholder='Enter Phone Number' />
                </div>
                <div className='form-group mb-4'>
                    <label className='form-label'>Email</label>
                    <input type='email' className='form-control' value={props.contactEmail} onChange={(e)=>props.setContactEmail(e.target.value)} placeholder='Enter Mail' />
                </div>
                <button className='btn btn-primary' data-bs-dismiss='modal' onClick={(e)=>props.addContact(e)}>Add Contact</button>
            </div>
        </form>
    </>
  )
}

export default AddContactForm