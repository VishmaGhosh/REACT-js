import React, { Component } from 'react';

// use for render props

class User extends Component {
    render() {
        return (
            <div>
                {this.props.render(false)}
            </div>
        );
    }
}

export default User;