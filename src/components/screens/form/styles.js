import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../constants/colors';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'blue',
  },
  SubmitButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 5,
    width: width * 0.30,
    minWidth: 85,
    height: 45,
    padding: 10,
    alignSelf: 'center',
    backgroundColor: Colors.blue,
  },
  ButtonText: {
    color: Colors.white,
    textAlign: 'center',
  },
});

export default styles;
