import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../constants/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

  CardContainer: {
    display: 'flex',
    height: height - 300,
    width: width - 60,
    padding: 10,
    margin: 30,
    borderRadius: 45,
    backgroundColor: Colors.shadow,
    elevation: 1,
  },

  Title: {
    fontSize: 15,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },

  Description: {
    justifyContent: 'center',
    marginBottom: 50,
  },

  TextDescription: {
    textAlign: 'center',
  },

  QrCodeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ButtonContainer: {
    display: 'flex',
    marginBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

});

export default styles;