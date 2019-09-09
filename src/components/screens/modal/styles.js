import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../constants/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  MainContainer: {
    height,
    width,
    alignItems: 'center',
  },

  QrCodeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  textBox: {
    width: '90%',
  },

  text: {
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 40,
    marginTop: 50,
    color: Colors.blue,
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'capitalize',
  },

});

export default styles;
