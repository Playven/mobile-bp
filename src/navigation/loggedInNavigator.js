import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../modules/home/HomeScreen';
import SettingsScreen from '../modules/home/SettingsScreen';

const LoggedInNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    },
    SettingsScreen: {
      screen: SettingsScreen
    }
  },
  {
    initialRouteName: 'HomeScreen'
  }
);

export default LoggedInNavigator;
