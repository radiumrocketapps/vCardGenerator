import { combineReducers } from 'redux';
import vCardReducer from './vCardReducer';

export default combineReducers({
  vCard: vCardReducer,
});
