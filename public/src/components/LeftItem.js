import React from 'react';
import { Link } from 'react-router';

const LeftItem = ({item}) => {
  var roomPath = "/chat/" + item.name;
  return (
    <li key={item.id}><Link to={roomPath}>{item.name}</Link></li>
  );
}

export default LeftItem;