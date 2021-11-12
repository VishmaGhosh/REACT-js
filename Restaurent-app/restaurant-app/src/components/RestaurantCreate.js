import React, { Component } from 'react';
import NavBarManu from "./NavBarManu";
import { Button, } from 'react-bootstrap';
//import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';

class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            address: null,
            ratting: null,
            email: null,
        }
    }
    create() {
        if(this.state.name===null){
            alert("Enter Restaurant Name")
        }
        else{
                fetch("http://localhost:8002/restaurants", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((response) => {
                alert("Restaurent data has been added");
            })
        })
    }
}
    goto() {
        this.props.history.push('/list');
    }
    render() {
        return (
            <div>
                <NavBarManu />
                <h1>Restaurant Create</h1>
                <div>
                    <input className="input" onChange={(event) => { this.setState({ name: event.target.value}) }} placeholder="Restaurent Name" /><br /><br />
                    <input className="input" onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder="Address" /><br /><br />
                    <input className="input" onChange={(event) => { this.setState({ ratting: event.target.value }) }} placeholder="Ratting" /><br /><br />
                    <input className="input" onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder="Email" /><br /><br />
                    <Button onClick={() => { this.create() }}>Add Restaurant</Button><br /><br />
                    <Link to="/list/" style={{textDecoration:"none"}}>Restaurants list</Link>

                </div>
            </div>
        );
    }
}

export default RestaurantCreate;