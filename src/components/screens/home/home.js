// @flow
import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Text,
} from 'react-native';
import { NavigationScreenProps, NavigationState } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import qrExample from '../../../images/qrExample.png';
import { FORM, MODAL } from '../../../navigation/screens';
import Colors from '../../../constants/colors';
import Styles from './styles';
import Card from '../../shared/card';

type Props = {
  navigation: NavigationScreenProps<NavigationState>,
  vCards: Array<*>,
}

const { width } = Dimensions.get('window');

class Home extends React.Component<Props, {}> {
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
    const { navigation, vCards } = this.props;
    return (
      <SafeAreaView>
        <View style={Styles.MainContainer}>
          {!(vCards.length > 0)
            ? (
              <ScrollView
                horizontal
                decelerationRate="fast"
                scrollEventThrottle={10}
                showsHorizontalScrollIndicator={false}
                snapToInterval={width - 5}
                snapToAlignment="center"
                contentInset={{
                  top: 0,
                  left: 30,
                  bottom: 0,
                  right: 30,
                }}
                pagingEnabled
              >
                <Card
                  title="test"
                  image={qrExample}
                  onSearchPress={() => { navigation.navigate(MODAL); }}
                  description="description"
                />
                <Card
                  title="test"
                  image={qrExample}
                  onSearchPress={() => { navigation.navigate(MODAL); }}
                  description="description"
                />
              </ScrollView>
            ) : (
              <View>
                <Text style={Styles.AddTextInfo}>
                  Click on the
                  <Text style={Styles.AddButtonInfo}> + </Text>
                  icon for add a vCard
                </Text>
              </View>
            )}
          <TouchableOpacity
            style={Styles.AddButton}
            onPress={() => navigation.navigate(FORM)}
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

export default Home;
