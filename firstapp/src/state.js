import React from 'react'

export default class State extends React.Component{
    constructor(){
        super();
        this.state={
            name: "alex",
            email:"alex@mail.com",
            count:0
        }
    }
    updateState(){
        this.setState({
            name:'Hanna',
            count:this.state.count+1
        })
    }
    render(){
        return(
            <div>
                <p>count: {this.state.count}</p>
                <h2>Hello {this.state.name}</h2>
                <p>Email: {this.state.email}</p>
                <button onClick={()=>{this.updateState()}}>Update</button>
            </div>
        )
    }
}