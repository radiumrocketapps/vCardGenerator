// @flow
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import Styles from './styles';

type Props = {
}

const Modal = (props: Props) => (
  <SafeAreaView>
    <View style={Styles.MainContainer}>
      <Text>
        Here will be the Modal content
      </Text>
    </View>
  </SafeAreaView>
);

export default Modal;
