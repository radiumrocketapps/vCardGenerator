import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from '../redux/reducer';

const initialState = {};

const Store = createStore(
  createRootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  ),
);

export default Store;
