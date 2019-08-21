// @flow
import { connect } from 'react-redux';
import Home from './home';

const mapStatetoProps = (state: { vCard: { list: Array<*> } }) => ({
  vCards: state.vCard.list,
});

export default connect(mapStatetoProps)(Home);
