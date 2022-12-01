import React from 'react'

const ContactsList = (props) => {
    
  return (
    <>
        <ul className='list-unstyled list-group'>
            {(props.contacts && props.contacts.length) ?'':<div className='d-flex flex-column align-items-center justify-content-center opacity-50'><span className='fs-2'><i className='bi bi-person-circle'></i></span><span className='fs-4'>Contacts are empty</span></div>}
            { props.contacts && props.contacts
            .sort((a, b)=> a.id > b.id ? 1 : -1)
            .map(({id, name, phone, email}) => {
                return (
                    <li className='list-group-item bg-dark text-white' key={id}>
                        <div className='fs-5'>
                            <div className='d-flex align-items-start'>
                                <div className='me-2'>
                                    <span className='rounded-circle text-bg-secondary avatar'><i className='bi bi-person-circle'></i></span>
                                </div>
                                <div className='flex-grow-1'>
                                    <p className='m-0'>{name}</p>
                                    <span className='opacity-75 fs-6'>
                                        <span><i className='bi bi-telephone me-2'></i></span>
                                        <span>{phone}</span>
                                    </span><br />
                                    <span className='opacity-75 fs-6'>
                                        <span><i className='bi bi-envelope me-2'></i></span>
                                        <span>{email}</span>
                                    </span>
                                </div>
                                <div className='d-flex gap-2 align-self-center'>
                                    <button className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#editcontactmodal' onClick={()=>props.setEditContactRecord({
                                        id: id,
                                        name: name,
                                        email: email,
                                        phone: phone
                                    })}><i className='bi bi-pencil-square me-2'></i>Edit</button>
                                    <button className='btn btn-danger' onClick={()=>props.deleteContact(id)}><i className='bi bi-trash me-2'></i>Delete</button>
                                </div>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    </>
  )
}

export default ContactsList