import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import {Link,NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import NavBarManu from "./NavBarManu";

class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list:[],
        
        }
    }
    componentDidMount() {
        fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {
                //console.warn(result)
                this.setState({ list: result })
            })
        })
    }
    delete(id){
        //alert("delete");
        fetch('http://localhost:3000/restaurant/'+id,{
            method:"DELETE",
            //headers:{
            //    'Content-Type':'application/json'
            //},
        }).then((result)=>{
            result.json().then((response)=>{
                alert("Restaurent data has been Deleted")
            })
        })
    }
    render() {
        return (
            <div>
                <NavBarManu />
                <h1>Restaurant List</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Email</th>
                                        <th>Ratting</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item,i) =>
                                            <tr>
                                                <td>{i}</td>
                                                <td>
                                                    <NavLink to={"/details/"}>{item.name}</NavLink>
                                                    </td>
                                                <td>{item.address}</td>
                                                <td>{item.Email}</td>
                                                <td>{item.Ratting}</td>
                                                <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} color="orange" /> </Link>
                                                <Link onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrashAlt} color="red" /></Link>
                                                </td>
                                            </tr>
                                        )
                                }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Plese wait..</p>
                }
            </div>
        );
    }
}

export default RestaurantList;