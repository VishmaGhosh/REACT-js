import React, { Component } from 'react';
import { Button, } from 'react-bootstrap';
import NavBarManu from "./NavBarManu";

class RestaurantSearch extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
        }
    }
    componentDidMount() {
        fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {
                //console.warn(result)
                this.setState({ list: result })
                //console.log(this.state);
            })
        })
    }
    get(name) {
        //alert("delete");
        fetch('http://localhost:3001/login/' + name, {
            method: "GET",
            //headers:{
            //    'Content-Type':'application/json'
            //},
        }).then((result) => {
            result.json().then((response) => {
                this.setState({ list: result })
                //alert("Restaurent data has been Deleted")
            })
        })
    }
    render() {
        return (
            <div>
                <NavBarManu />
                <h1>restaurant details</h1>
                <div>

                    {
                        this.state.list.map((item, i) =>
                            <Button onClick={() => { this.get(item.name) }}>Goto List</Button>
                        )
                    }

                </div>


            </div>
        );
    }
}

export default RestaurantSearch;