import React from 'react'
import {Button} from 'react-bootstrap'

class UseRef extends React.Component{
    constructor(){
        super();
        this.userRef=React.createRef();
    }
    editVal(){
        console.warn(this.userRef)
        this.userRef.current.value="12121"
    }
    render(){
        return(
            <div>
                <h1>Ref in react</h1>
                <input ref={this.userRef} type="text" name="user" /><br />
                <Button onClick={()=>this.editVal()}>Click_me</Button>{/*here we use bootstrap button */}
            </div>
        );
    }
}

export default UseRef
//react-bootstrap imported 
// 