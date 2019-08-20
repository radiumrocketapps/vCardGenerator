// @flow
import { connect } from 'react-redux';
import Modal from './modal';

const mapStatetoProps = (state: { vCard: { list: Array<*> } }) => ({
  vCards: state.vCard.list,
});

export default connect(mapStatetoProps)(Modal);
