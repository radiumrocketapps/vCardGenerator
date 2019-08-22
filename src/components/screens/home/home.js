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
import type { ReduxProps } from '.';
import { NavigationScreenProps, NavigationState } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FORM, MODAL } from '../../../navigation/screens';
import Colors from '../../../constants/colors';
import Styles from './styles';
import Card from '../../shared/card';

type Props = ReduxProps & {
  navigation: NavigationScreenProps<NavigationState>,
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
    const { navigation, vCardList, deleteQrCode } = this.props;
    console.log('props', this.props);
    return (
      <SafeAreaView>
        <View style={Styles.MainContainer}>
          {vCardList.length > 0
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
                {
                  vCardList.map(item => {
                    return(
                      <Card
                        key={item.id}
                        title={item.name}
                        values={item}
                        onSearchPress={() => { navigation.navigate(MODAL); }}
                        onDeletePress={() => deleteQrCode(item.id)}
                      />
                    )
                  })
                }
              </ScrollView>
            )
            : (
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
