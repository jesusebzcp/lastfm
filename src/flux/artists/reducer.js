import createReducer from '../createReducer';
import { HANDLE_ERROR, LOADING } from './types';

export const INITIAL_STATE_ARTISTS = {
  loading: false,
  error: false,
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

export default createReducer(INITIAL_STATE_ARTISTS, {
  [LOADING]: setLoading,
  [HANDLE_ERROR]: setError,
});
