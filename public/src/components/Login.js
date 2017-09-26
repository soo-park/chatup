import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as loginActions from '../actions/loginActions';


class Login extends React.Component {
  constructor(props, context) {
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
        <div>
          <input type="text" placeholder="Type your username..." className="form-control item" id="user"></input><br/>
          <button type="submit" className="btn btn-primary item" onClick={(e)=> this.handleUsername(e)}>Join the DoorDash Chat!</button>
        </div>
      </div>
    )
  }
}

// function mapStateToProps(state, ownProps) {

//   return {
//     userName: userName,
//     authors: authorsFormattedForDropdown  
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(courseActions, dispatch)
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login;
