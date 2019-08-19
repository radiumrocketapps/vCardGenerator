import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { FORM } from '../../../navigation/screens'

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home ',
  };
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>Home</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(FORM)}
          >
            <Text>
                Go to form screen
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home