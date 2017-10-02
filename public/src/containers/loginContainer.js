import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../actions/loginActions';
import { Redirect, Link } from 'react-router';
import Login from '../components/Login.js';

Login.propTypes = {
  userName: React.PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    userName: state.userName  
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);