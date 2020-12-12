import React, { createContext, useReducer } from 'react';
import artistsReducer, { INITIAL_STATE_ARTISTS } from './artists/reducer';
import tracksReducer, { INITIAL_STATE_TRACKS } from './tracks/reducer';
import uiReducer, { INITIAL_STATE_UI } from './ui/reducer';

export const StoreContext = createContext({});

export default ({ children }) => {
  const [artistsState, artistsDispatch] = useReducer(
    artistsReducer,
    INITIAL_STATE_ARTISTS,
  );
  const [tracksState, tracksDispatch] = useReducer(
    tracksReducer,
    INITIAL_STATE_TRACKS,
  );
  const [uiState, uiDispatch] = useReducer(uiReducer, INITIAL_STATE_UI);
  return (
    <StoreContext.Provider
      value={{
        state: { artistsState, tracksState, uiState },
        artistsDispatch,
        tracksDispatch,
        uiDispatch,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
