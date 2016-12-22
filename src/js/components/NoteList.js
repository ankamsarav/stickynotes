import React from "react"
import { connect } from "react-redux"

import Note from "./Note"
import ModalAddNote from "./ModalAddNote"
import AddNote from "./AddNote"

import Masonry from 'react-masonry-component';

import {fetchNotes,addNote,deleteNote,setNoteTheme} from "../actions/notesActions"

@connect((store) => {
  return {
    stickynotes: store.stickynotes
  };
})
export default class NoteList extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchNotes())
  }

  onAddingNote() {
      this.props.dispatch(setAddingMode(true))
  }

  onCancelAddNote() {
      this.props.dispatch(setAddingMode(false))
  }

  onAddNote(data) {
    this.props.dispatch(addNote(data))
  }

  onDeleteNote(ID) {
    if (confirm("Are you sure you want to delete this note?") == true) {
        this.props.dispatch(deleteNote(ID));
    }
  }

  onSetTheme(id, theme) {
      this.props.dispatch(setNoteTheme({id, theme}))
  }

  render() {
    const masonryOptions = {transitionDuration: 0};
    const {stickynotes} = this.props
    return <div class="notes-container">
        <div class="notes-actions row">
            <div class="col-xs-offset-2 col-xs-6">
            <AddNote themes={stickynotes.themes} onAddNote={this.onAddNote.bind(this)} onSetTheme={this.onSetTheme.bind(this)} />
            </div>
        </div>
        <div class="row notes-list">
        <Masonry
            className={'notes-list-content'} // default ''
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >
            {
                stickynotes.notes.map( (note, index) =>  
                    <Note 
                        key={index} 
                        note={note} 
                        themes={stickynotes.themes} 
                        onSetTheme={this.onSetTheme.bind(this)} 
                        onDelete={this.onDeleteNote.bind(this)} 
                    />
                )
            }
        </Masonry>
    </div>
    </div>
  }
}
