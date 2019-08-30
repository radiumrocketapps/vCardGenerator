import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  SubmitButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 50,
    width: 80,
    height: 40,
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
