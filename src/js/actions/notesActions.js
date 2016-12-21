import axios from "axios";

export function fetchNotes() {
  /*return function(dispatch) {
    axios.get("https://api.pinterest.com/v3/pidgets/boards/vicemag/magazine/pins/")
      .then(response => dispatch({type: "FETCH_BUNDLE_FULFILLED", payload: response.data}) )
      .catch(err => dispatch({type: "FETCH_BUNDLE_ERROR", payload: err}) )
  }*/
  return (dispatch) => dispatch({type: "FETCH_NOTES_FULFILLED", payload: data})
}

export function addNote(id) {
  return (dispatch) => dispatch({type: "ADD_NOTE", payload: id})
}

export function setNoteTheme({id, theme}) {
  return (dispatch) => dispatch({type: "UPDATE_NOTE_COLOR", payload: {id,theme}})
}

export function deleteNote(id) {
  return (dispatch) => dispatch({type: "DELETE_NOTE", payload: id})
}

const data = {
  themes: ["white", "yellow", "red", "blue"],
  notes: [
    {
      id:1,
      title: "First",
      content:"This is the first one",
      theme: "yellow"
    },
    {
      id:2,
      title: "Second",
      list:[{"checked": true, "text":"Go down"}, {"checked": true, "text":"Go up"}],
      theme: "yellow"
    },
    {
      id:3,
      title: null,
      content:"This is the third one",
      theme: "yellow"
    },
    {
      id:4,
      title: "Fifth",
      content:"This is the fifth one. Wait... something wrong here... Some one seems to be missing",
      theme: "yellow"
    },
    {
      id:5,
      title: "Fourth",
      content:"This is the fourth one. I am a little late",
      theme: "yellow"
    }
  ]
}