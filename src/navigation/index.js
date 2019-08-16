// @flow
import {
  createAppContainer,
  createStackNavigator,
 } from 'react-navigation'
 import homeScreen from '../components/screens/homeScreen'
 import * as SCREENS from './screens'
 import Colors from '../constants/colors'

 const MainStack = createStackNavigator(
  {
    [SCREENS.HOME_SCREEN]: {
      screen: homeScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.blue,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
        width: '100%',
      },
    },
  },
 )
 const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    // MyModal: {
    //   screen: ModalScreen,
    // },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
 )

 const AppContainer = createAppContainer(RootStack)

 export default AppContainer
