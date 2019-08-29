import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  MainContainer: {
    display: 'flex',
    height: '100%',
  },
  QrCodeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Description: {
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 50,
    color: Colors.blue,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
