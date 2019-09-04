// @flow
import { connect } from 'react-redux';
import Modal from './modal';
import type { RootReducerState } from '../../../redux/modules'
import type { State as vCardState } from '../../../redux/modules/vCard/types';

export type StateProps = {|
  +vCardList: $PropertyType<vCardState, 'list'>,
|}

const mapStatetoProps = (state: RootReducerState) => ({
  vCards: state.vCard.list,
});

export default connect(mapStatetoProps)(Modal);
export type ReduxProps = StateProps;
