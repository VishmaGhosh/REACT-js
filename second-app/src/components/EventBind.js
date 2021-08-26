import React, { Component } from 'react';

class EventBind extends Component {
    constructor(){
        super()
        this.state = {
            messsage:"hello"
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         messsage:"Goodbye"
    //     })
    //     console.log(this);
    // }
    clickHandler = ()=>{
        this.setState({
            messsage:"Goodbye!"
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.messsage}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>


            </div>
        );
    }
}

export default EventBind;