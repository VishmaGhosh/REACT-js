import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"vishma"
        }
        console.log('LifecycleA constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps ');
        return null
    }
    componentDidMount() {
        console.log('LifecycleA componentDidMount ');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifecycleA shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('LifecycleA componenetDidUpdate');
    }

    changeState = () => {
        this.setState({
            name:"Tinu"
        })
    }
    
    
    render() {
        console.log('LifecycleA render');
        return (
            <div>
                <h3>LifecycleA</h3>
                <button onClick={this.changeState}>Chan State</button>
                <LifecycleB />
            </div>
        );
    }
}

export default LifecycleA;