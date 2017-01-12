import React from "react"

import NoteTheme from "./NoteTheme"

import {Modal,Button,FormGroup,ControlLabel,FormControl} from "react-bootstrap"

const defaultProps = {
    title:"",
    text:"",
    id: 0,
    theme:"white",
    expanded:false
};

export default class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = defaultProps;
    }

    componentWillMount() {
        document.addEventListener('click', this.handleClick.bind(this), false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick.bind(this), false);
    }

    handleClick(e) {
        const isClickedInside = this.container.contains(e.target);
        if(!isClickedInside) {this.state = defaultProps}
        this.setState({ expanded : isClickedInside });
        
        //if(isClickedInside) {this.input_text.focus()}
    }

    onFormSubmit(e) {
        e.preventDefault()
        this.props.onAddNote(this.state);
        this.setState(defaultProps);
    }

    onSetTheme(id, theme) {
        this.setState({ theme });
    }

    handleChange(field, event) {
        var object = {};
        object[field] = event.target.value;
        this.setState(object);
    }
  render() {
    const self = this;
    const {note,themes} = this.props
    const state = this.state
    return <div class={`add-note theme-${state.theme}`} ref={((container) => { this.container = container; })}>
        {
            state.expanded
            ? <div>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <FormGroup controlId={'formControlsTitle'}>
                        <input id="formControlsTitle" class="form-control" type="text" placeholder="Title" onChange={this.handleChange.bind(this, 'title')} ref={((input) => { this.input_title = input; })} />
                    </FormGroup>
                    <FormGroup controlId={'formControlsText'}>
                        <input id="formControlsText" class="form-control" type="text" placeholder="Text" onChange={this.handleChange.bind(this, 'text')} ref={((input) => { this.input_text = input; })} focus />
                    </FormGroup>
                    <div class="note-actions clearfix">
                        <NoteTheme note={state} themes={themes} onSetTheme={self.onSetTheme.bind(self)} />
                        <div class="note-action pull-right">
                            <Button class="btn-plain btn-save" type="submit">SAVE</Button>
                        </div>
                    </div>
                </form>
            </div>
            : <div>
                <div>Add a note</div>
            </div>
        }
        </div>
    }
}