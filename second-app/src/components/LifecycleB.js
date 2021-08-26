import React, { Component } from 'react';

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"vishma"
        }
        console.log('LifecycleB constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps ');
        return null
    }
    componentDidMount() {
        console.log('LifecycleB componentDidMount ');
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifecycleB shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log('LifecycleB getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('LifecycleB componenetDidUpdate');
    }

    render() {
        console.log('LifecycleB render');
        return (
            <div>
                <h3>LifecycleB</h3>
            </div>
        );
    }
}

export default LifecycleB;