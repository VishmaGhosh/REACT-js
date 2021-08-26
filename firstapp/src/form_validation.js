import React from 'react';
export default class Forms extends React.Component{
    constructor()
    {
        super()
        this.state={
            username:null,
            nameError:"",
            password:null,
            passwordError:"",
        }
    }
    valid(){
        if(!this.state.username.includes('@') && this.state.password.length<5)
        {
            this.setState({nameError:"Invalid name", passwordError:"password length should be more then 4"})
        }
        else if(!this.state.username.includes('@'))
        {
            this.setState({nameError:"Invalid name"})
        }
        else if(this.state.password.length<5)
        {
            this.setState({passwordError:"password should be more then 4"})
        }
        else{
            return true
        }
    }
    submit(){
        this.setState({ nameError:"", passwordError:""})
        if(this.valid())
        {
            alert("form has been submited");
        }
    }

    render()
    {
        return(
            <div>
                <h1>Form handling</h1>
                <input type="text" name="username" placeholder="username" onChange={(event)=>{this.setState({username:event.target.value})}}/>
                <p style={{color:"red",fontSize:"15px"}}>{this.state.nameError}</p>
                <input type="password" name="password" placeholder="password" onChange={(event)=>{this.setState({password:event.target.value})}} />
                <p style={{color:"red",fontSize:"15px"}}>{this.state.passwordError}</p>
                <button onClick={()=>this.submit()}>Submit</button>

            </div>
        );
    }
}
