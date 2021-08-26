import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom"

export const ContactCard = (props) => {
    const { id, name, email } = props.contact
    return (

        <div>
            <ListGroup horizontal>
                <ListGroup.Item>{name}</ListGroup.Item>
                <ListGroup.Item>{email}</ListGroup.Item>
                <ListGroup.Item><Link onClick={() => props.clickHandler(id)}><FontAwesomeIcon icon={faTrashAlt} color="red" /></Link></ListGroup.Item>
            </ListGroup>
        </div>
    )
}
