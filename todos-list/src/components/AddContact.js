import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import ContactList from './ContactList'

class AddContact extends Component {
    state = {
        name: "",
        email: "",

    }
    Add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the field are empty !");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" })
        this.props.history.push("/")
    }
    render() {
        return (
            <div className="container">
                <Form onSubmit={this.Add}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" value={this.state.value} onChange={(e) => this.setState({ name: e.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" value={this.state.value} onChange={(e) => this.setState({ email: e.target.value })} /><br />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Form>
            </div>
        );
    }
}

export default AddContact;