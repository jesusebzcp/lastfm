import { LOADING } from './types';

export const setLoadingGlobal = (loading, dispatch) => {
  dispatch({ type: LOADING, payload: loading });
};
