import React, { Component } from 'react';

// learn state using counter

class comp1 extends Component {
    constructor(){
        super()
        this.state={
            count: 0
        }
    }
    increment(){
        // this.setState({
        //     count: this.state.count +1
        // },()=>{
        //     console.log("callback",this.state.count);
        // })
        this.setState((prevState,props)=>({
            count: prevState.count + 1
        }))
        console.log(this.state.count);
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
                count : {this.state.count}<br />
                <button onClick={()=>{this.incrementFive()}}>increment</button>
                
            </div>
        );
    }
}

export default comp1;