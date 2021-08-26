import React from 'react'
import { ContactCard } from './ContactCard';
import { Link } from 'react-router-dom';
import {Button } from 'react-bootstrap'

export const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    
    const renderContactList = props.contact.map((contact) => {
        return (
            <ContactCard contact={contact} 
            clickHandler={deleteContactHandler} 
            key={contact.id} />
        )
    })
    return (
        <div>
            Contact List
            <Link to="/AddContact">
                <Button variant="outline-primary" size="sm">Add Contact</Button><br /><br></br>
            </Link>
            {renderContactList}
        </div>
    )
}
export default ContactList
