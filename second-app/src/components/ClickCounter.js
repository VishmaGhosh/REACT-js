import React, { Component } from 'react';
import WithCounter from './WithCounter';

// use for HOC

class ClickCounter extends Component {
    
    render() {
        const {count , countIncrement} = this.props
        return (
            <div>
                <button onClick={countIncrement}>{this.props.name} Clicked {count} times</button>
            </div>
        );
    }
}

export default WithCounter(ClickCounter,5);