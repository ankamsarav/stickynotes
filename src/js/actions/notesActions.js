import axios from "axios";

export function fetchNotes() {
  return (dispatch) => dispatch({type: "FETCH_NOTES_FULFILLED", payload: data})
}

export function addNote(data) {
  return (dispatch) => dispatch({type: "ADD_NOTE", payload: data})
}

export function setNoteTheme({id, theme}) {
  return (dispatch) => dispatch({type: "UPDATE_NOTE_COLOR", payload: {id,theme}})
}

export function deleteNote(id) {
  return (dispatch) => dispatch({type: "DELETE_NOTE", payload: id})
}

const data = {
  themes: ["white", "red", "orange", "yellow", "grey", "blue", "teal", "green"],
  notes: [
    {
      id:1,
      title: "First",
      content:"This is the first one",
      theme: "white"
    },
    {
      id:2,
      title: "Second",
      list:[{"checked": true, "text":"Go down"}, {"checked": true, "text":"Go up"}],
      theme: "white"
    },
    {
      id:3,
      title: null,
      content:"This is the third one",
      theme: "white"
    },
    {
      id:4,
      title: "Fifth",
      content:"This is the fifth one. Wait... something wrong here... Some one seems to be missing",
      theme: "white"
    },
    {
      id:5,
      title: "Fourth",
      content:"This is the fourth one. I am a little late",
      theme: "white"
    }
  ]
}