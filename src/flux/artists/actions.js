import { HANDLE_ERROR, LOADING } from './types';
import axios from 'axios';
import Config from 'react-native-config';

export const handleError = (dispatch) => {
  dispatch({ type: HANDLE_ERROR, payload: true });
  setLoading(false, dispatch);
};

export const setLoading = (loading, dispatch) => {
  dispatch({ type: LOADING, payload: loading });
};

export const getArtists = async (dispatch) => {
  try {
    setLoading(true, dispatch);
    const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=${Config.TOKEN}&format=json`;
    const response = await fetch(url);
    console.log('response =>', response);

    setLoading(false, dispatch);
  } catch (error) {
    setLoading(false, dispatch);

    console.log('error:getArtists', error);
  }
};
