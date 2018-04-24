import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import AppLoading from './appLoading';
import LoggedInNavigator from './loggedInNavigator';
import LoggedOutNavigator from './loggedOutNavigator';

const AppNavigation = createSwitchNavigator(
  {
    appLoading: AppLoading,
    loggedIn: LoggedInNavigator,
    loggedOut: LoggedOutNavigator
  },
  {
    initialRouteName: 'appLoading'
  }
);

class Navigator extends React.Component {
  render() {
    return <AppNavigation />;
  }
}
export default Navigator;
