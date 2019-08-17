/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './navigation';
import store from './helpers/store';

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
