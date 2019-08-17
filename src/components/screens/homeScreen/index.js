import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home Screen',
  };

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>HomScreen</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
