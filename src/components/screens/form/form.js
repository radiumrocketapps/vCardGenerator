import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { QR_CODE } from "../../../navigation/screens";
import css from './form.style'

class Form extends React.Component {
  static navigationOptions = {
    title: 'Form',
  };
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>Form</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(QR_CODE)}
          style={css.successButton}
        >
          <Text>
              Generar código
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default Form