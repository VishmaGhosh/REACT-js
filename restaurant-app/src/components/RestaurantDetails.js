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