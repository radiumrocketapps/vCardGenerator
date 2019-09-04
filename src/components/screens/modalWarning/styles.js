import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../constants/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  ModalContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Modal: {
    minHeight: '28%',
    width: '90%',
    marginTop: 10,
    backgroundColor: Colors.white,
    borderRadius: 20,
    borderColor: Colors.grey,
    borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  CloseButtonContainer: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 10,
    marginRight: 30,
  },

  ModalHeader: {
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },

  ModalTextContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ModalTextDescription: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.grey,
  },

  ModalButtonsContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  ModalButtonEnable: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.blue,
    padding: 3,
    marginBottom: 20,
  },

  ModalButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
  }
});

export default styles;
