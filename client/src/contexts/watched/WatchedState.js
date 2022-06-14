import { useReducer } from 'react';
import watchedReducer from './watchedReducer';
import watchedContext from './watchedContext';
import { ADD_WATCHED_LIST, REMOVE_WATCHED_LIST } from './types';

const WatchedState = (props) => {
  const initialState = [];
  const [state, dispatch] = useReducer(watchedReducer, initialState);

  const addWatchedList = (watched) => {
    dispatch({
      type: ADD_WATCHED_LIST,
      payload: watched,
    });
  };

  const removeWatchedList = (id) => {
    dispatch({
      type: REMOVE_WATCHED_LIST,
      payload: id,
    });
  };

  return (
    <watchedContext.Provider
      value={{
        watched: state,
        addWatchedList,
        removeWatchedList,
      }}
    >
      {props.children}
    </watchedContext.Provider>
  );
};

export default WatchedState;
