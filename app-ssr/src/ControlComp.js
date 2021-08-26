import React from "react";
class ControlComp extends React.Component{
    constructor(){
        super();
        this.state ={
            name:"",
            password:"",
        }

    }
    submit(){
        console.warn(this.state);
    };
    render(){
        return(
            <div>
                <h3>Control Component</h3>
                    <input type="text" placeholder="enter name" onChange={(event)=>{this.setState({name:event.target.value})}} /><br/><br />
                    <input type="password" placeholder="enter password" onChange={(event)=>{this.setState({password:event.target.value})}} /><br /> <br />
                    <button onClick={()=>{this.submit()}} type="submit">Submit</button>
            </div>
            
        )
    }
}
export default ControlComp