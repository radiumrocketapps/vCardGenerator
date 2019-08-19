import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../../constants/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  CardContainer: {
    display: 'flex',
    height: height - 300,
    width: width - 60,
    padding: 10,
    margin: 30,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.blue,
    shadowColor: Colors.black,
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    elevation: 1,
  },
  Title: {
    fontSize: 15,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },
  Image: {
    width: 30,
    height: 30,
    flexGrow: 1,
  },
  ButtonContainer: {
    display: 'flex',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default styles;
