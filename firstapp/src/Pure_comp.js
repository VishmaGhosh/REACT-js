import React, {PureComponent, } from 'react'

 class PureComp extends PureComponent {
    constructor(){
        super();
        this.state={
            data:10,
        }
    }
    render(){
        console.warn(this.state)
        return(
            <div>
                <div>
                    <h1>Pure Component  {this.state.data}</h1>
                    <button onClick={()=>{this.setState({data:20})}}>update state</button>
                </div>
            </div>
        );

    }
}
export default PureComp;