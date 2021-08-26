import React, { Component } from 'react'

class User extends Component{
    render(){
        if(true){
            throw new Error('custom error')
        }
        return(
            <div>
                <h1>User Component</h1>
            </div>
        );
    }
}
export default User

// make this component for use of error Boundery