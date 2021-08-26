import { useState, useEffect } from 'react'
import './App.css';
import { uuid } from 'uuidv4'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  const local_storage_key = "contact";
  const [contact, setContact] = useState([])

  const addContactHandler = (contact) => {
    console.log(contact)
    setContact([{ id:uuid(),...contact }]);
  };
  const removeContactHandler = (id) => {
    const newContactList = contact.filter((contact) => {
      return contact.id !== id;
    })
    setContact(newContactList);
  };

  useEffect(() => {
    const retriveContact = JSON.parse(localStorage.getItem(local_storage_key))
    if (retriveContact) setContact(retriveContact)
  }, []);


  useEffect(() => {
    localStorage.setItem(local_storage_key, JSON.stringify(contact))
  }, [contact])

  return (
    <div>
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand className="mx-2" href="#home">Contact Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#ContactList"><Link to="/">ContactList</Link></Nav.Link>
              <Nav.Link href="#AddContact"><Link to="/AddContact">AddContact</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact render={(props)=> (
          <ContactList {...props} 
          contact={contact}
          getContactId={removeContactHandler}
          />
        )} 
        />
        <Route 
        path="/AddContact"
        render={(props)=>(
          <AddContact {...props} addContactHandler={addContactHandler} />
        )}
        />
      </Router>
    </div>

  );
}

export default App;
