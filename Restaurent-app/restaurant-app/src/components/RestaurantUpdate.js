import React, { Component } from 'react';
import NavBarManu from "./NavBarManu";
import { Button} from 'react-bootstrap';
import { withRouter } from "react-router";


class RestaurantUpdate extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            address:null,
            ratting:null,
            email:null,
            id:null,
        }
    }
    componentDidMount(){
        const  id  = this.props.match.params.id
        // console.log(id);
        fetch(`http://localhost:8002/restaurants/${id}`).then((response) => {
            response.json().then((result) => {
                console.warn(result);
                this.setState({
                    name:result.name,
                    address:result.address,
                    ratting:result.ratting,
                    email:result.email,
                    id:result._id

                })
            })
        })
    }
    update(){
        fetch("http://localhost:8002/restaurants/"+this.state.id,{
            method:"PATCH",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((response)=>{
                alert("Restaurent data has been updated");
                this.props.history.push('/list');
            })
        })
    }
    render() {
        //console.warn(this.state)
        
        return (
            <div>
                <NavBarManu />
                <h1>Restaurant Update</h1>
                <div>
                    <input onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Restaurent Name" value={this.state.name} /><br /><br/>
                    <input onChange={(event)=>{this.setState({address:event.target.value})}} placeholder="address" value={this.state.address} /><br /><br/>
                    <input onChange={(event)=>{this.setState({ratting:event.target.value})}} placeholder="Ratting" value={this.state.ratting} /><br /><br/>
                    <input onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Email" value={this.state.email} /><br /><br/>
                    <Button onClick={()=>{this.update()}}>Update Restaurant</Button>

                </div>
            </div>
        );
    }
}

export default withRouter(RestaurantUpdate);