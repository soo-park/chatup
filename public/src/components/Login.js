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
    // e.preventDefault();
    var input = this.refs.userName.value;
    var userId = "yy35578";
    if(!input) {
      console.log("username not entered");
    } else {
      console.log("input in Login", input);
      var path = "/chat/" + input;
      this.state.userName = 
    }
  }

    handleViewChange(viewName, userName, userId) {
    this.setState({
      view: viewName,
      userName: userName,
      userId: userId,
      messages: [],
      rooms: []
    });
  }

  render () {
    var input = this.refs.userName ? this.refs.userName.value : 'annonymous';    
    return (
      <div className="bounding login">
        <form>
          <input
            type="text"
            ref="userName"
            placeholder="Type your username..."
            className="form-control item"
            id="user" /><br/>
 
          <Link to={path}
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
