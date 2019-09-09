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
import logo from '../../../res/images/vCardGenerator_icon.png'
import QRCode from 'react-native-qrcode-svg';
import styles from './styles';
import Colors from '../../../constants/colors';

type Props = NavigationScreenProps & ReduxProps & {
  stringObject: string,
}

type State = {
  actualBrightness: number | null;
}

class Modal extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
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
          <View style={styles.textBox}>
            <Text
              numberOfLines={1}
              ellipsizeMode='tail'
              style={styles.text}>
              {values.name}
            </Text>
          </View>
          <View style={styles.QrCodeContainer}>
            <QRCode
              value={stringObject}
              logo={logo}
              logoSize={30}
              size={250}
              color="black"
              backgroundColor="white"
            />
          </View>
        </View>
      </SafeAreaView>
    )
  }
};

export default Modal;
