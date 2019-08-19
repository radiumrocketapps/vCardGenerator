import React from "react";
import { View, Text, SafeAreaView } from "react-native";

class QrCode extends React.Component {
  static navigationOptions = {
    title: 'Qr code to Share',
  };
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>QrCode</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default QrCode