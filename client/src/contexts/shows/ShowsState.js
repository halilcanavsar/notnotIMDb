import { useReducer } from 'react';
import showsReducer from './showsReducer';
import showsContext from './showsContext';
import { SEARCH_SHOWS, SET_LOADING, SET_SINGLE_SHOW, CLEAR_SINGLE_SHOW } from '../types';

const ShowsState = (props) => {
  const initialState = {
    shows: [],
    loading: false,
    singleShow: {}
  }
  const [ state, dispatch ] = useReducer(showsReducer, initialState);

  const searchShows = async (searchTerm) => {
    setLoading();
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_SHOWS,
      payload: data
    });
  }



  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  }

  const setSingleShow = async (id) => {
    setLoading();
    const res = await fetch(`https://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=seasons`);
    const data = await res.json();
    console.log(data);

    dispatch({
      type: SET_SINGLE_SHOW,
      payload: data
    });
  }

  const clearSingleShow = async () => {
    dispatch({
      type: CLEAR_SINGLE_SHOW
    });
  }

  return (
    <showsContext.Provider
    value={{
      shows: state.shows,
      singleShow: state.singleShow,
      loading: state.loading,
      searchShows,
      setSingleShow,
      clearSingleShow
    }}>
      {props.children}
    </showsContext.Provider>
   );
}

export default ShowsState;