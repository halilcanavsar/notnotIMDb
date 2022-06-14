import { ADD_FAVORITE_LIST, REMOVE_FAVORITE_LIST } from './types';

const favoriteReducer = ( state=[], action ) => {
  switch (action.type) {
    case ADD_FAVORITE_LIST:
      if(state.find(favorite => favorite === action.payload)){
        return state;
      }
      return [...state, action.payload];
    case REMOVE_FAVORITE_LIST:
      return state.filter(item => item !== action.payload);
    default:
      return state;
  }
}

export default favoriteReducer;