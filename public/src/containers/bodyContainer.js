import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Body from '../components/Body.js';

Body.propTypes = {
  view: React.PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    view: state.view
  };
}

export default connect(
  mapStateToProps
)(Body);