import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../constants/colors';
import Styles from './styles';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'vCard Generator',
    headerRight: (
      <Ionicons
        name="ios-settings"
        size={30}
        color={Colors.white}
        style={Styles.ConfigButton}
      />
    )
  }

  render() {
    return (
      <SafeAreaView>
        <View style={Styles.MainContainer}>
          <TouchableOpacity
            style={Styles.AddButton}
          >
            <Ionicons
              name="ios-add-circle"
              color={Colors.blue}
              size={80}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
