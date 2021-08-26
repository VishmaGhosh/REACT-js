import React, { Component } from 'react';

// use for render props


class clickCounterTwo extends Component {
    render() {
        const { count , countIncrement } = this.props
        return (
            <div>
                <button onClick={countIncrement}>Clicked {count} times</button>
            </div>
        );
    }
}

export default clickCounterTwo;