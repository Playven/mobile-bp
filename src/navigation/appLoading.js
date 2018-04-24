import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';

class AppLoading extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    loggedIn: PropTypes.bool.isRequired
  };

  componentDidMount() {
    const { navigation, loggedIn } = this.props;
    if (loggedIn) {
      return navigation.navigate('loggedIn');
    }
    return navigation.navigate('loggedOut');
  }
  render() {
    return <View />;
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  };
};

export default connect(mapStateToProps)(AppLoading);
