import React, { Component } from 'react';
import { Container, Form, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import NavBarManu from "./NavBarManu";

class RestaurantSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchData: null,
            noData: false,
            lastSearch:"",
        }
    }
    search(key) {
        //console.warn(key);
        this.setState({lastSearch:key})
        fetch('http://localhost:3000/restaurant?q=' + key).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if (resp.length > 0) {
                    this.setState({ searchData: resp, noData: false })
                }
                else {
                    this.setState({ noData: true, searchData: null })
                }

            });
        });
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
                this.search(this.state.lastSearch)
            })
        })
    }
    render() {
        return (
            <div>
                <NavBarManu />
                <Container>
                <h1>Search Restaurant </h1>
                <div>
                <Form.Control type="text" placeholder="Search Restaurant" onChange={(event) => this.search(event.target.value)} />
                </div>
                <div>


                    {
                        this.state.searchData ?
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
                                            this.state.searchData.map((item, i) =>
                                            <tr>
                                            <td>{i}</td>
                                            <td>{item.name}</td>
                                            <td>{item.address}</td>
                                            <td>{item.Email}</td>
                                            <td>{item.Ratting}</td>
                                            <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} color="orange" /> </Link>
                                            <Link onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrashAlt} color="black" /></Link>
                                            </td>
                                        </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </div>
                            : ""
                    }
                    {
                        this.state.noData ? <h3>no data found</h3> : null
                    }
                </div>
                </Container>
            </div>
        );
    }
}

export default RestaurantSearch;