// @flow
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import * as SCREENS from './screens';
import Colors from '../constants/colors';
import HomeScreen from '../components/screens/homeScreen';
import FormScreen from '../components/screens/formScreen';

const MainStack = createStackNavigator(
  {
    [SCREENS.HOME_SCREEN]: {
      screen: HomeScreen,
    },
    [SCREENS.FORM_SCREEN]: {
      screen: FormScreen,
    }
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: true,
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
);

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
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
