/**
 * @format
 * @flow
*/

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './navigation';
import GlobalFont from 'react-native-global-font';
import {
  store as configureStore,
  persistor,
} from './helpers/store';
import SplashScreen from 'react-native-splash-screen';

class App extends React.Component<{}> {
  componentDidMount() {
    let fontName = 'Rubik-Light';
    SplashScreen.hide();
    GlobalFont.applyGlobal(fontName);
  }

  render = () => (
    <Provider store={configureStore}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  )
};

export default App;
