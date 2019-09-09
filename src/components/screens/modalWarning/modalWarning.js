// @flow
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  NativeModules,
  Modal
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../constants/colors';

type Props = NavigationScreenProps & {
  handleClose: () => void,
  description: string,
  closeModal: () => void,
}

class ModalWarning extends React.Component<Props, {}> {

  render() {
    const {
      description,
      closeModal,
      handleClose,
    } = this.props
    return (
      <Modal
        animationType="slide"
        transparent
        onRequestClose={closeModal}
      >
        <View style={styles.ModalContainer}>
          <View style={styles.Modal}>
            <View style={styles.CloseButtonContainer}>
              <TouchableOpacity
                onPress={closeModal}
              >
                <Ionicons
                  name="ios-close"
                  color={Colors.blue}
                  size={40}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.ModalHeader}>
              <View
                style={styles.ModalTextContainer}
              >
                <Text style={styles.ModalTextDescription}>
                  {description}
                </Text>
              </View>
            </View>
            <View style={styles.ModalButtonsContainer}>
              <TouchableOpacity
                onPress={() => {
                  handleClose()
                  closeModal()
                }}
                style={styles.ModalButtonEnable}
              >
                <Text style={styles.ModalButtonText}>
                  {'Eliminar'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
};

export default ModalWarning;
