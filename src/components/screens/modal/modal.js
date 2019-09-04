// @flow
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  NativeModules,
  StatusBar,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import type { ReduxProps } from './';
import QRCode from 'react-native-qrcode';
import styles from './styles';
import Colors from '../../../constants/colors';

type Props = NavigationScreenProps & ReduxProps & {
  stringObject: string,
}

type State = {
  actualBrightness: number | null;
}

class Modal extends React.Component<Props, State> {
  constructor() {
    super();
    this.state= {
      actualBrightness: null
    }
  }

  render() {
    const { navigation } = this.props
    const stringObject = navigation.getParam('stringObject', '')
    const values = navigation.getParam('values', '')
    return (
      <SafeAreaView>
        <StatusBar backgroundColor={Colors.blue} barStyle="light-content" />
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
