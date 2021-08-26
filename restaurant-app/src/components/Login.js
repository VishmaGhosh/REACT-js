import React, { Component } from 'react';
import NavBarManu from "./NavBarManu";
import { Button} from 'react-bootstrap';

class Login extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            password:null
        };
    };
    login(){
        //console.warn(this.state);
        fetch('http://localhost:3000/login?q=' + this.state.password ).then((data) => {
            data.json().then((resp) => {
                //console.warn("resp", resp);
                if(resp.length>0)
                {
                    localStorage.setItem("login",JSON.stringify(resp));
                    console.warn(this.props.history.push("/"))
                }
                else
                {
                    alert("please check username & password");
                }
            });
        });
    }
    render() {
        return (
            <div>
                <NavBarManu />

                <br />
                <input className="input" type="text" placeholder="User name" name="user" onChange={(event)=>this.setState({name:event.target.value})} /><br /><br />
                <input className="input" type="password" placeholder="Password" name="password" onChange={(event)=>this.setState({password:event.target.value})} /><br /><br />
                <Button onClick={()=>{this.login()}} color="red">Login</Button>
            </div>
        );
    }
}

export default Login;