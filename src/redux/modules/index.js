// @flow
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import vCardReducer from './vCard/reducer';
import type { State as vCardState } from './vCard/types'

export type RootReducerState = {|
  vCard: vCardState,
  form: Object,
|}

const rootReducer = combineReducers({
  vCard: vCardReducer,
  form,
});

export default rootReducer;
