import React, { Component } from 'react';
// props destructuring


class Comp3 extends Component {
    render() {
        const {name,heroName} = this.props
        return (
            <div>
                {name}- aka - {heroName}
            </div>
        );
    }
}

export default Comp3;