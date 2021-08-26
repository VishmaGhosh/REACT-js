import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddContact from './AddContact';
import ContactList from './ContactList'
import Home from './Home'

export default function Header() {
    return (
        <div>
            <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand className="mx-2" href="#home">Contact Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                        <Nav.Link href="/"><Link to="/Home">Home</Link></Nav.Link>
                        <Nav.Link href="#ContactList"><Link to="/ContactList">ContactList</Link></Nav.Link>
                        <Nav.Link href="#AddContact"><Link to="/AddContact">AddContact</Link></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Route exact path="/Home" component={Home} />
            <Route path="/ContactList" component={ContactList} />
            <Route exact path="/AddContact" component={AddContact} />
            </Router>
        </div>
    )
}
