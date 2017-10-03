import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../actions/loginActions';
import { Redirect, Link } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleUsername = this.handleUsername.bind(this); 
  }

  handleUsername(e) {
    e.preventDefault();
    var input = $("#user").val();
    var userId = "yy35578";

    if(!input) {
      console.log("username not entered");
    } else {
      this.props.changeView('body', input, userId);
    }
  }

  render () {
    return (
      <div className="bounding login">
        <form>
          <input
            type="text"
            ref="userName"
            placeholder="Type your username..."
            className="form-control item"
            id="user" /><br/>
 
          <Link to='/chat'
            className="btn btn-primary item"
            onClick={e=> this.handleUsername(e)}>
            Join the DoorDash Chat!
          </Link>
        </form>
      </div>
    )
  }
}

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
// export default Login;
