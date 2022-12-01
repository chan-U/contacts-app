import React from 'react'

const EditContactForm = (props) => {
  return (
    <>
        <form>
            <div className='p-4 border rounded-2'>
                <div className='form-group mb-3'>
                    <label className='form-label'>Name</label>
                    <input type='text' className='form-control' value={props.editContactRecord.name} onChange={(e)=>props.handleEditContactName(e)} placeholder='Enter Contact Name' />
                </div>
                <div className='form-group mb-3'>
                    <label className='form-label'>Phone</label>
                    <input type='number' className='form-control' value={props.editContactRecord.phone} onChange={(e)=>props.handleEditContactPhone(e)} placeholder='Enter Phone Number' />
                </div>
                <div className='form-group mb-4'>
                    <label className='form-label'>Email</label>
                    <input type='email' className='form-control' value={props.editContactRecord.email} onChange={(e)=>props.handleEditContactEmail(e)} placeholder='Enter Mail' />
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <button className='btn btn-warning' data-bs-dismiss='modal' onClick={(e)=>props.editContact(e)}>Edit Contact</button>
                    <button className='btn btn-danger' data-bs-dismiss='modal' onClick={(e)=>props.editContactCancel(e)}>Cancel</button>
                </div>
            </div>
        </form>
    </>
  )
}

export default EditContactForm