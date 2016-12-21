import React from "react"
import { connect } from "react-redux"

import Note from "./Note"

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

  addNote() {
    this.props.dispatch(addNote());
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
    return <div class="row notes-list">
        <Masonry
            className={'notes-list-content'} // default ''
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >
            {stickynotes.notes ? stickynotes.notes.map( (note, index) =>  <Note key={index} note={note} themes={stickynotes.themes} onSetTheme={this.onSetTheme.bind(this)} onDelete={this.onDeleteNote.bind(this)} />) : []}
        </Masonry>
    </div>
  }
}
