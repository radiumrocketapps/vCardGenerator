import { StyleSheet } from 'react-native';
import Colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  InputContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    position: 'relative'
  },
  Label: {
    color: Colors.grey,
    fontSize: 17,
  },
  TextInput: {
    padding: 5,
    marginTop: 0,
    borderBottomWidth: 2,
    fontWeight: 'bold'
  },
  InputIcon: {
    position: 'absolute',
    top: 20,
    right: 5,
  },
  ErrorMsg: {
    color: Colors.red,
  }
});

export default styles;
