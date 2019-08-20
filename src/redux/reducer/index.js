import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import vCardReducer from './vCardReducer';

export default combineReducers({
  vCard: vCardReducer,
  form,
});
