// @flow
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  NativeModules
} from 'react-native';
import QRCode from 'react-native-qrcode';
import styles from './styles';

type Props = {
  stringObject: string,
  values: QrData,
}
class Modal extends React.Component {
  constructor() {
    super();
    this.state={
      actualBrightness: null
    }
  }

  render() {
    const { navigation } = this.props
    const stringObject = navigation.getParam('stringObject', '')
    const values = navigation.getParam('values', '')
    return (
      <SafeAreaView>
        <View style={styles.MainContainer}>
          <View>
            <Text style={styles.Description}>
              {values.name}
            </Text>
          </View>
          <View style={styles.QrCodeContainer}>
            <QRCode
              value={stringObject}
              size={250}
              bgColor="black"
              fgColor="white"
            />
          </View>
        </View>
      </SafeAreaView>
    )
  }
};

export default Modal;
