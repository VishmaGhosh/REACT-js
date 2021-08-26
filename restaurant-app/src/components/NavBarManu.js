import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faHome, faPlusSquare, faSearch, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav } from 'react-bootstrap';
import { Link} from 'react-router-dom';

class NavBarManu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home"><h2>Restaurant</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome} color="" />Home</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/list"><FontAwesomeIcon icon={faList} color="" />Restaurant List</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/create"><FontAwesomeIcon icon={faPlusSquare} color="" />Add Restaurant</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/details"><FontAwesomeIcon icon={faInfoCircle} color="" />Details</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/search"><FontAwesomeIcon icon={faSearch} color="" />Search</Link></Nav.Link>
                            {
                                localStorage.getItem('login')?
                                <Nav.Link href="#link"><Link to="/logout"><FontAwesomeIcon icon={faUser} color="" />Logout</Link></Nav.Link>
                                :
                                <Nav.Link href="#link"><Link to="/login"><FontAwesomeIcon icon={faUser} color="" />Login</Link></Nav.Link>

                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        );
    }
}

export default NavBarManu;