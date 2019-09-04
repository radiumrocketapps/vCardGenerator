import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../constants/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  MainContainer: {
    height,
    width,
  },

  QrCodeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  Description: {
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 40,
    marginTop: 50,
    color: Colors.blue,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
