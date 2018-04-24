import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'react-native';

class LoginScreen extends React.Component {
  static propTypes = { navigation: PropTypes.object.isRequired };
  static navigationOptions = {
    title: 'Log In'
  };
  state = {};
  render() {
    return (
      <View>
        <Text>LoginScreen</Text>
        <Button title="sign up screen" onPress={() => this.props.navigation.navigate('SignUpScreen')} />
        <Button title="login" onPress={() => this.props.navigation.navigate('HomeScreen')} />
      </View>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
