import React, { createContext, useReducer } from 'react';
import artistsReducer, { INITIAL_STATE_ARTISTS } from './artists/reducer';

export const StoreContext = createContext({});

export default (props) => {
  const [artistsState, artistsDispatch] = useReducer(
    artistsReducer,
    INITIAL_STATE_ARTISTS,
  );

  return (
    <StoreContext.Provider
      value={{
        state: { artistsState },
        artistsDispatch,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
