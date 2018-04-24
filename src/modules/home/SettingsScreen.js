import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings'
  };
  state = {};
  render() {
    return (
      <View>
        <Text>SettingsScreen</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
