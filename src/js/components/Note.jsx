import React from "react"

import NoteTheme from "./NoteTheme"

import {Modal,Button,FieldGroup,FormGroup,FormControl,ControlLabel} from 'react-bootstrap';

export default class Note extends React.Component {
  render() {
    const self = this;
    const {note,themes} = this.props
    return <div class="note-wrapper col-xs-6 col-md-3 col-lg-3" data-key={note.id}>
        <div class={`note theme-${note.theme}`}>
            {note.title ? <div class="note-title">{note.title}</div>: ''}
            {
                note.list 
                ? <div class="note-text"><ul class="list-unstyled">{note.list.map((value, index) => <li key={`list_item_${index}`}><input type="checkbox" id={`checkbox_${note.id}_${index}`} /><label for={`checkbox_${note.id}_${index}`}><span class="checkbox-state"></span>{value.text}</label></li> )}</ul></div> 
                : <div class="note-text">{note.content}</div>
            }
            <div class="note-actions clearfix">
                <NoteTheme note={note} themes={themes} onSetTheme={self.props.onSetTheme.bind(self)} />
                <div class="note-action note-action-delete pull-right">
                    <button onClick={self.props.onDelete.bind(self, note.id)} class="btn-plain">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
  }
}