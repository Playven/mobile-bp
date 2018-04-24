import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'react-native';
class HomeScreen extends React.Component {
  static propTypes = { navigation: PropTypes.object.isRequired };
  static navigationOptions = {
    title: 'Home'
  };
  state = {};
  render() {
    return (
      <View>
        <Text>HomeScreen</Text>
        <Button title="Settings" onPress={() => this.props.navigation.navigate('SettingsScreen')} />
        <Button title="LogOut" onPress={() => this.props.navigation.navigate('LoginScreen')} />
      </View>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
