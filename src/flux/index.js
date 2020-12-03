import React, { createContext, useReducer } from 'react';
import artistsReducer, { INITIAL_STATE_ARTISTS } from './artists/reducer';
import tracksReducer, { INITIAL_STATE_TRACKS } from './tracks/reducer';

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
  return (
    <StoreContext.Provider
      value={{
        state: { artistsState, tracksState },
        artistsDispatch,
        tracksDispatch,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
