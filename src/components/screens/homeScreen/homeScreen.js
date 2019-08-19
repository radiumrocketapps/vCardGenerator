import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../constants/colors';
import Styles from './styles';
import Card from '../shared/card';

const { width } = Dimensions.get('window');
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
    const { navigation, vCards } = this.props;

    return (
      <SafeAreaView>
        <View style={Styles.MainContainer}>
          {vCards.length > 0
            ? (
              <ScrollView
                onScroll={
                  Animated.event(
                    [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
                  )
                }
                ref={(scrollView) => { this.scrollView = scrollView; }}
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
                  image=""
                  description="description"
                />
                <Card
                  title="test"
                  image=""
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
            onPress={() => navigation.navigate('FORM_SCREEN')}
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
