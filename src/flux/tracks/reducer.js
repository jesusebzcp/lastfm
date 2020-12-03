import createReducer from '../createReducer';
import { HANDLE_ERROR, LOADING, GET_TRACKS } from './types';

export const INITIAL_STATE_TRACKS = {
  loading: false,
  error: false,
  tracks: [],
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
const getTracks = (state, action) => {
  return {
    ...state,
    tracks: state.tracks.concat(action.payload),
  };
};

export default createReducer(INITIAL_STATE_TRACKS, {
  [LOADING]: setLoading,
  [HANDLE_ERROR]: setError,
  [GET_TRACKS]: getTracks,
});
