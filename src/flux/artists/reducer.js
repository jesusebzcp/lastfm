import createReducer from '../createReducer';
import { HANDLE_ERROR, LOADING, GET_ARTISTS, GET_SEARCH } from './types';

export const INITIAL_STATE_ARTISTS = {
  loading: false,
  error: false,
  artists: [],
  searchArtists: [],
};

const setLoading = (state, action) => {
  return {
    ...state,
    loading: action.payload,
  };
};

const setError = (state, action) => {
  return {
    ...state,
    error: action.payload,
  };
};
const getArtists = (state, action) => {
  return {
    ...state,
    artists: action.payload,
  };
};
const getSearch = (state, action) => {
  return {
    ...state,
    searchArtists: action.payload,
  };
};

export default createReducer(INITIAL_STATE_ARTISTS, {
  [LOADING]: setLoading,
  [HANDLE_ERROR]: setError,
  [GET_ARTISTS]: getArtists,
  [GET_SEARCH]: getSearch,
});
