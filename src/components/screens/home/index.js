// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './home';
import { deleteQrCode } from '../../../redux/modules/vCard/actions';
import type { RootReducerState } from '../../../redux/modules'
import type { State as vCardState } from '../../../redux/modules/vCard/types';

export type StateProps = {|
  +vCardList: $PropertyType<vCardState, 'list'>,
|}

const mapStatetoProps = (state: RootReducerState): StateProps => ({
  vCardList: state.vCard.list,
});

export type DispatchProps = {|
  +deleteQrCode: typeof deleteQrCode,
|}

const mapDispatchToProps = (dispatch): DispatchProps => bindActionCreators(
  { 
    deleteQrCode,
  }, dispatch,
)

export default connect(mapStatetoProps, mapDispatchToProps)(Home);
export type ReduxProps = StateProps & DispatchProps;
