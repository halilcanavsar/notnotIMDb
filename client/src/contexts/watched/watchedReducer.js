import { ADD_WATCHED_LIST, REMOVE_WATCHED_LIST } from "./types";

const watchedReducer = (state = [], action) => {
  console.log({action,state})
  switch (action.type) {
    case ADD_WATCHED_LIST:
      if(state.find(watched => watched === action.payload)){
        return state;
      }
      return [...state, action.payload];
    case REMOVE_WATCHED_LIST:
      return state.filter(item => item !== action.payload);
    default:
      return state;
  }


}

export default watchedReducer;