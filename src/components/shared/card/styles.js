import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../constants/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

  Container: {
    height: height * 0.68,
    width: width - 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    borderRadius: 10,
    backgroundColor: Colors.shadow,
    overflow: 'hidden',
    elevation: 5,
  },

  CardContainer: {
    height: '100%',
    width: '90%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  Title: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },

  Description: {
    justifyContent: 'center',
  },

  TextDescription: {
    textAlign: 'center',
  },

  QrCodeContainer: {
    overflow:'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  ButtonContainer: {
    width: '100%',
    marginBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

});

export default styles;