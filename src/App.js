/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './navigation';
import {
  store as configureStore,
  persistor,
} from './helpers/store';

const App = () => (
  <Provider store={configureStore}>
    <PersistGate persistor={persistor}>
      <Navigation />
    </PersistGate>
  </Provider>
);

export default App;
