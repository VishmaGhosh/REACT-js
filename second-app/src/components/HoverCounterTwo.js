import React, { Component } from 'react';

// use for render props


class HoverCounterTwo extends Component {
    render() {
        const { count , countIncrement } = this.props
        return (
            <div>
                <h1 onMouseOver={countIncrement}>Mouse Hover {count} times</h1>
            </div>
        );
    }
}

export default HoverCounterTwo;