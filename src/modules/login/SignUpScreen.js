import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up'
  };
  state = {};
  render() {
    return (
      <View>
        <Text>SignUpScreen</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
