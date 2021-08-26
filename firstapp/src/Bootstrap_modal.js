import React from 'react';
import {Button, Modal} from 'react-bootstrap';

class BootstrapModal extends React.Component{
    constructor(){
        super();
        this.state={
            show:false
        }
    }
    handleModal(){
        this.setState({show: !this.state.show})
    }
    render(){
        return(
            <div>
                <Button onClick={()=>this.handleModal()}>Click</Button>
                <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                    <Modal.Header closeButton>Modal Heading</Modal.Header>
                    <Modal.Body>Modal Body</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>this.handleModal()}>Close</Button>
                        <Button onClick={()=>this.handleModal()}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default BootstrapModal;