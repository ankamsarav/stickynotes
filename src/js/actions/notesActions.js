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

export function removeNote(id) {
  return (dispatch) => dispatch({type: "REMOVE_NOTE", payload: id})
}

const data = {
}