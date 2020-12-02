import 'react-native-gesture-handler';
import React from 'react';

//Store
import Store from './src/flux';
import Router from './src/Config/Router';

const App = () => {
  return (
    <Store>
      <Router />
    </Store>
  );
};

export default App;
