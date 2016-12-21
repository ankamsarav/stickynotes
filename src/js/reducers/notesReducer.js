export default function reducer(state={
    notes: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_NOTES": {
        return {...state, fetching: true}
      }
      case "FETCH_NOTES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_NOTES_FULFILLED": {
        return {...state, fetching: false, fetched: true, notes:action.payload.notes, themes:action.payload.themes}
      }
      case "ADD_NOTE": {
        var note_new = {
          id: (new Date()).getTime(),
          title: action.payload.title,
          content: action.payload.text,
          theme: "white"
        }
        return {...state, notes: state.notes.concat(note_new)}
      }
      case "DELETE_NOTE": {
        return {...state, notes: state.notes.filter(el => el.id !== action.payload)}
      }
      case "UPDATE_NOTE_COLOR": {
        let {id,theme} = action.payload
        const notes = state.notes.map(function(el) {
          if(el.id == id) {el.theme = theme;}
          return el;
        })
        return {...state, notes}
      }
    }

    return state
}
