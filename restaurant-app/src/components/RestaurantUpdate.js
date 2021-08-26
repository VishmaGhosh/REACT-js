import React, { Component } from 'react';
import NavBarManu from "./NavBarManu";
import { Button} from 'react-bootstrap';

class RestaurantUpdate extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            address:null,
            Ratting:null,
            Email:null,
            id:null,
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/restaurant/"+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                //console.warn(result);
                this.setState({
                    name:result.name,
                    address:result.address,
                    Ratting:result.Ratting,
                    Email:result.Email,
                    id:result.id

                })
            })
        })
    }
    update(){
        fetch("http://localhost:3000/restaurant/"+this.state.id,{
            method:"PUT",
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
                    <input onChange={(event)=>{this.setState({Ratting:event.target.value})}} placeholder="Ratting" value={this.state.Ratting} /><br /><br/>
                    <input onChange={(event)=>{this.setState({Email:event.target.value})}} placeholder="Email" value={this.state.Email} /><br /><br/>
                    <Button onClick={()=>{this.update()}}>Update Restaurant</Button>

                </div>
            </div>
        );
    }
}

export default RestaurantUpdate;