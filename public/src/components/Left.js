import React from 'react';
import LeftItem from './LeftItem.js';
import calculateTimeElapsed from './helper/time.js';


class Left extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    calculateTimeElapsed();
  }

  render() {
    var {userName, rooms} = this.props;
    return (
      <div className="navbar navbar-default navbar-fixed-left">
        <div className="navbar-brand" href="#">
          <span>{userName}</span><br />
          <span className="navbar-sub-brand" id="time">Elapsed time</span>
        </div>
        <ul className="nav navbar-nav">
          {rooms? rooms.map(item => <LeftItem key={item.id} item={item}/>) : "Loading"}
        </ul>
      </div>
    )
  }
}
  
export default Left;