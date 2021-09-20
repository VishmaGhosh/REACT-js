import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router, Route, Link
} from 'react-router-dom'
import Home from './Home'
import About from './About'

function NavBar() {
    return (
        <Router>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">More deets</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Dank memes
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <switch>
                    <Route path="/home"><Home /></Route>
                    <Route path="/about"><About /></Route>
                </switch>
            </div>
        </Router>
    )
}

export default NavBar

