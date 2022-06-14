import { useReducer } from 'react';
import favoriteReducer from './favoriteReducer';
import favoriteContext from './favoriteContext';
import { ADD_FAVORITE_LIST, REMOVE_FAVORITE_LIST } from './types';

const FavoriteState = (props) => {
  const initialState = [];
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  const addFavoriteList = (favorite) => {
    dispatch({
      type: ADD_FAVORITE_LIST,
      payload: favorite,
    });
  }

  const removeFavoriteList = (id) => {
    dispatch({
      type: REMOVE_FAVORITE_LIST,
      payload: id,
    });
  }

  return (
    <favoriteContext.Provider
      value={{
        favorite: state,
        addFavoriteList,
        removeFavoriteList,
      }}
    >
      {props.children}
    </favoriteContext.Provider>
  );
}

export default FavoriteState;