import { HANDLE_ERROR, LOADING, GET_ARTISTS, GET_SEARCH } from './types';
import axios from 'axios';
import Config from 'react-native-config';
import { Alert } from 'react-native';

export const handleError = (dispatch) => {
  setLoading(false, dispatch);

  dispatch({ type: HANDLE_ERROR, payload: true });
};

export const setLoading = (loading, dispatch) => {
  dispatch({ type: LOADING, payload: loading });
};

export const getArtists = async (dispatch, limit) => {
  try {
    setLoading(true, dispatch);
    const url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=${Config.TOKEN}&format=json&limit=10`;
    const response = await axios(url);
    if (response.status !== 200) {
      Alert.alert('Ups sorry, error');

      setLoading(false, dispatch);
      return;
    }

    setLoading(false, dispatch);
    dispatch({ type: GET_ARTISTS, payload: response.data.topartists.artist });
  } catch (error) {
    setLoading(false, dispatch);

    console.log('error:getArtists', error);
  }
};
export const searchArtistsAction = async (word, dispatch) => {
  try {
    setLoading(true, dispatch);

    const url = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${word}&api_key=${Config.TOKEN}&format=json&limit=10`;
    const response = await axios(url);
    if (response.status !== 200) {
      Alert.alert('Ups sorry, error');

      setLoading(false, dispatch);
      return;
    }
    setLoading(false, dispatch);
    dispatch({
      type: GET_SEARCH,
      payload: response.data.results.artistmatches.artist,
    });
  } catch (error) {
    setLoading(false, dispatch);
    console.log('error =>', error);
  }
};
export const resetSearch = (dispatch) => {
  dispatch({
    type: GET_SEARCH,
    payload: [],
  });
};
