import React from 'react';
import handleTime from './helper/time.js';
import { Link } from 'react-router';

class Left extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    handleTime();
  }

  handleClick(e, id) {
    e.preventDefault();
    this.props.handleRoomChange(id);
  }

  render () {
    return (
      <div className="navbar navbar-default navbar-fixed-left">
        <div className="navbar-brand" href="#">
          <span>{this.props.userName}</span><br />
          <span className="navbar-sub-brand" id="time">Elapsed time</span>
        </div>
        <ul className="nav navbar-nav">
          {/* {this.props ? this.props.rooms.map(item => <li key={item.id}><a href="#" onClick={(e)=> {this.handleClick(e, item.id)}}>{item.name}</a></li>) : "Loading"} */}
          {this.props ? this.props.rooms.map(item => <li key={item.id}><Link to='/chat'>{item.name}</Link></li>) : "Loading"}
        </ul>
      </div>
    )
  }
}
  
export default Left;