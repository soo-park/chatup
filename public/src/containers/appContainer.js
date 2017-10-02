import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewActions from '../actions/viewActions.js';
import App from '../components/App.js';

App.propTypes = {
  allState: React.PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    allState: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(viewActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
