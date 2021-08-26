import React, { Component } from 'react'

//conditional rendering

class UserGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        return this.state.isLoggedIn && <div>welcome vishma</div>

        // return(
        //     this.state.isLoggedIn ? 
        //     <div>welcome Vishma</div> :
        //     <div>welcome guest</div>
        // )

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Vishma</div>
        // }
        // else {
        //     message = <div>welcome guest</div>
        // }
        // return <div>{message}</div>
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome vishma</div>
        //     )
        // }
        // else {
        //     return (
        //         <div>Welcome guest</div>
        //     )
    }
    // return (
    //     <div>
    //         <h1>
    //             Welcome World
    //         </h1>
    //         <h2>
    //             welcome kids
    //         </h2>

    //     </div>
    // )
}

export default UserGreeting
