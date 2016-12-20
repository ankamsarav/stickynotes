export default function reducer(state={
    products: {},
    fetching: false,
    fetched: false,
    selected: [],
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
        return {
          ...state,
          fetching: false,
          fetched: true,
          products: action.payload,
        }
      }
      case "ADD_NOTE": {
        return state.selected.length < 4 ? {...state, selected: state.selected.concat(action.payload)} : state
      }
      case "REMOVE_NOTE": {
        return {...state, selected: state.selected.filter(el => el !== action.payload)}
      }
    }

    return state
}
