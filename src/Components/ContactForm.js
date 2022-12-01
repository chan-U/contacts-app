import React, { useRef, useState } from 'react'
import AddContactForm from './AddContactForm'
import ContactsList from './ContactsList'
import EditContactForm from './EditContactForm'

const ContactForm = () => {

    const [contacts, setContacts] = useState([])

    const [contactName, setContactName] = useState('')
    const [contactEmail, setContactEmail] = useState('')
    const [contactPhone, setContactPhone] = useState('')
    const addContact = (e) => {
        e.preventDefault()
        let newContact = {
            id: contacts.length + 1,
            name: contactName,
            email: contactEmail,
            phone: contactPhone
        }
        if(newContact.name.length > 1 && newContact.email.length && newContact.phone.length > 1) {
            setContacts([...contacts, newContact])
            setContactName('')
            setContactEmail('')
            setContactPhone('')
        }
        else {
            window.alert('Please fill all the fields')
        }
    }

    const deleteContact = (id) => {
        let finalContacts = [...contacts].filter(contact => {
            return (
                id !== contact.id
            )
        })
        setContacts(finalContacts)
    }

    const [editContactRecord, setEditContactRecord] = useState('')
    const handleEditContactName = (e) => {
        setEditContactRecord({
            id: editContactRecord.id,
            name: e.target.value,
            email: editContactRecord.email,
            phone: editContactRecord.phone
        })
    }
    const handleEditContactPhone = (e) => {
        setEditContactRecord({
            id: editContactRecord.id,
            name: editContactRecord.name,
            email: editContactRecord.email,
            phone: e.target.value
        })
    }
    const handleEditContactEmail = (e) => {
        setEditContactRecord({
            id: editContactRecord.id,
            name: editContactRecord.name,
            email: e.target.value,
            phone: editContactRecord.phone
        })
    }
    const editContact = (e) => {
        e.preventDefault()
        let filteredContacts = [...contacts].filter(contact => {
            return (
                contact.id !== editContactRecord.id
            )
        })
        setContacts([...filteredContacts, editContactRecord])
        setEditContactRecord('')
    }
    const editContactCancel = (e) => {
        e.preventDefault()
        setEditContactRecord('')
    }

    const searchInput = useRef('')
    const [searchVal, setSearchVal] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const handleSearch = () => {
        getSearchResults(searchInput.current.value)
    }
    const getSearchResults = (key) => {
        if(contacts.length) {
            setSearchVal(key)
            let results = [...contacts].filter(contact => {
                return (
                    Object.values(contact).join(' ').toLocaleLowerCase().includes(key.toLocaleLowerCase())
                )
            })
            setSearchResults(results)
        }
        else {
            window.alert('Please add contacts')
        }
    }
    

  return (
    <div className='container my-5'>
        <div className='row justify-content-center'>
            <div className='col-md-8'>               

                <div className='d-flex align-items-center gap-5 mb-4'>
                    <h4 className='mb-0 flex-grow-1'>Contacts ({(searchVal.length)?searchResults.length:contacts.length})</h4>
                    <div className='flex-shrink-0 d-flex gap-3'>
                        <div className='input-group'>
                            <input type='search' className='form-control border-end-0' disabled={`${(contacts.length)?'':'disabled'}`} ref={searchInput} value={searchVal} onChange={()=>handleSearch()} placeholder='Search Contact' />
                            <span className='input-group-text bg-white border-0'><i className='bi bi-search'></i></span>
                        </div>
                        <div className='flex-shrink-0'>
                            <button className='btn btn-primary' data-bs-toggle='modal' data-bs-target="#newcontactmodal"><i className='bi bi-plus-lg me-1'></i> New Contact</button>
                        </div>
                    </div>
                </div>

                <ContactsList 
                contacts={(searchVal.length !== 0 && searchVal.length !== null) ? searchResults : contacts}
                setEditContactRecord={setEditContactRecord}
                deleteContact={deleteContact}
                />

            </div>
        </div>

        <div className='modal fade' id="newcontactmodal">
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <AddContactForm
                    contactName={contactName}
                    setContactName={setContactName}
                    contactPhone={contactPhone}
                    setContactPhone={setContactPhone}
                    contactEmail={contactEmail}
                    setContactEmail={setContactEmail}
                    addContact={addContact}
                    />
                </div>
            </div>
        </div>

        <div className='modal fade' id="editcontactmodal">
            <div className='modal-dialog'>
                <div className='modal-content'>
                    {
                        (editContactRecord) && 
                        <EditContactForm
                        editContactRecord={editContactRecord}
                        handleEditContactName={handleEditContactName}
                        handleEditContactPhone={handleEditContactPhone}
                        handleEditContactEmail={handleEditContactEmail}
                        editContact={editContact}
                        editContactCancel={editContactCancel}
                        />
                    }
                </div>
            </div>
        </div>


    </div>

  )
}

export default ContactForm