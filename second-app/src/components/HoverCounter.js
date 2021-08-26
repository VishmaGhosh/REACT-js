import React, { Component } from 'react';
import WithCounter from './WithCounter';

//use for HOC

class HoverCounter extends Component {
    render() {
        const {count , countIncrement} = this.props

        return (
            <div>
                <h1 onMouseOver={countIncrement}> Hover {count} times</h1>
            </div>
        );
    }
}

export default WithCounter(HoverCounter,10);