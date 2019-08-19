// @flow
import {
  createAppContainer,
  createStackNavigator,
 } from 'react-navigation'
 import home from '../components/screens/home'
 import form from '../components/screens/form'
 import qrCode from '../components/screens/qrCode'
 import * as SCREENS from './screens'
 import Colors from '../constants/colors'

 const MainStack = createStackNavigator(
  {
    [SCREENS.HOME]: {
      screen: home,
    },
    [SCREENS.FORM]: {
      screen: form,
    },
    [SCREENS.QR_CODE]: {
      screen: qrCode,
    }
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
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
 )

 const AppContainer = createAppContainer(RootStack)

 export default AppContainer
