import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  MainContainer: {
    display: 'flex',
    height: '100%',
  },
  ConfigButton: {
    paddingRight: 10,
  },
  AddButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    alignSelf: 'flex-end',
  },
  AddTextInfo: {
    paddingTop: 40,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  AddButtonInfo: {
    fontWeight: 'bold',
    fontSize: 25,
    color: Colors.blue,
  }
});

export default styles;
