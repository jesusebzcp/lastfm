import createReducer from '../createReducer';
import { LOADING } from './types';

export const INITIAL_STATE_UI = {
  loading: false,
};

const setLoading = (state, action) => {
  return {
    ...state,
    loading: action.payload,
  };
};

export default createReducer(INITIAL_STATE_UI, {
  [LOADING]: setLoading,
});
