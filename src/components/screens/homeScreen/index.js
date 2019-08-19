import { connect } from 'react-redux';
import HomeScreen from './homeScreen';

const mapStatetoProps = (state) => ({
  vCards: state.vCard.list,
});

export default connect(mapStatetoProps)(HomeScreen);
