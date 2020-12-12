import { HANDLE_ERROR, LOADING, GET_TRACKS } from './types';
import axios from 'axios';
import Config from 'react-native-config';
import { Alert } from 'react-native';

export const handleError = (dispatch) => {
  dispatch({ type: HANDLE_ERROR, payload: true });
  setLoading(false, dispatch);
};

export const setLoading = (loading, dispatch) => {
  dispatch({ type: LOADING, payload: loading });
};
export const getTracksInitial = async (dispatch) => {
  try {
    setLoading(true, dispatch);
    const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=${Config.TOKEN}&format=json&page=1&limit=10`;
    const response = await axios(url);
    if (response.status !== 200) {
      Alert.alert('Ups sorry, error');
      setLoading(false, dispatch);
      return;
    }

    setLoading(false, dispatch);
    dispatch({ type: GET_TRACKS, payload: response.data.tracks.track });
  } catch (error) {
    setLoading(false, dispatch);

    console.log('error:getTracks', error);
  }
};

export const getTracks = async (dispatch, page) => {
  try {
    setLoading(true, dispatch);
    const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=${Config.TOKEN}&format=json&page=${page}&limit=10`;
    const response = await axios(url);
    if (response.status !== 200) {
      Alert.alert('Ups sorry, error');
      setLoading(false, dispatch);
      return;
    }

    setLoading(false, dispatch);
    dispatch({ type: GET_TRACKS, payload: response.data.tracks.track });
  } catch (error) {
    setLoading(false, dispatch);

    console.log('error:getTracks', error);
  }
};
