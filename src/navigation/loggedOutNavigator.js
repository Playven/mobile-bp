import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../modules/login/LoginScreen';
import SignUpScreen from '../modules/login/SignUpScreen';

const LoggedOutNavigator = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen
    },
    SignUpScreen: {
      screen: SignUpScreen
    }
  },
  {
    initialRouteName: 'LoginScreen'
  }
);

export default LoggedOutNavigator;
