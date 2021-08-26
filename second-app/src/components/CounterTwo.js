import React, { Component } from 'react';

// proper ex of render props 
// or shering functionality to other conponent

class CounterTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }
    countIncrement = () => {
        this.setState(pervState => {
            return {count : pervState.count +1}
        })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count,this.countIncrement)}
            </div>
        );
    }
}

export default CounterTwo;