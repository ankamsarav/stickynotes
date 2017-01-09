import React from "react"

import {Modal,Button,FormGroup,ControlLabel,FormControl} from "react-bootstrap"

export default class ModalAddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            text:"",
            showModal: false
        };
    }

    onFormSubmit(e) {
        e.preventDefault()
        this.props.onAddNote(this.state);
        this.setState({ showModal: false });
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }
    handleChange(field, event) {
        var object = {};
        object[field] = event.target.value;
        this.setState(object);
    }
  render() {
    const self = this;
    return (<div>
        <button class="btn-plain" onClick={this.open.bind(this)}>
            <i class="fa fa-plus fa-3" aria-hidden="true"></i>
        </button>
        <Modal class="modal-add-note" show={this.state.showModal} onHide={this.close.bind(this)}>
            <Modal.Header closeButton>
                <Modal.Title>Add note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <FormGroup controlId={'formControlsTitle'}>
                        <FormControl type="text" placeholder="Title" onChange={this.handleChange.bind(this, 'title')} />
                    </FormGroup>
                    <FormGroup controlId={'formControlsText'}>
                        <FormControl type="text" placeholder="Text" onChange={this.handleChange.bind(this, 'text')} />
                    </FormGroup>
                    <Button type="submit">Save</Button>
                </form>
            </Modal.Body>
        </Modal>
    </div>)
  }
}