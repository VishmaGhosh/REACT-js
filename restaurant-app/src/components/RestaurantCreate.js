import React, { Component } from 'react';
import NavBarManu from "./NavBarManu";
import { Button, } from 'react-bootstrap';
//import { Redirect } from 'react-router';

class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            address: null,
            Ratting: null,
            Email: null,
        }
    }
    create() {
        if(this.state.name===null){
            alert("Enter Restaurant Name")
        }
        else{
                fetch("http://localhost:3000/restaurant", {
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
                    <input className="input" onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder="address" /><br /><br />
                    <input className="input" onChange={(event) => { this.setState({ Ratting: event.target.value }) }} placeholder="Ratting" /><br /><br />
                    <input className="input" onChange={(event) => { this.setState({ Email: event.target.value }) }} placeholder="Email" /><br /><br />
                    <Button onClick={() => { this.create() }}>Add Restaurant</Button><br /><br />
                    <Button onClick={() => { this.goto() }}>Goto List</Button>

                </div>
            </div>
        );
    }
}

export default RestaurantCreate;