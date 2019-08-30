import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from '../redux/modules';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['vCard'],
};

const persistedReducer = persistReducer(persistConfig, createRootReducer);

const initialState = {};

export const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  ),
);

export const persistor = persistStore(store);
