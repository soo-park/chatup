import React from 'react';
import { Link } from 'react-router';

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
      // update state & pass it through the Router
      console.log("input in Login", input);
      console.log(this.props.actions)
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

export default Login;
