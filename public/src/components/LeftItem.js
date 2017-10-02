import React from 'react';
import { Link } from 'react-router';

const handleClick = (e, id) => {
  e.preventDefault();
  this.props.handleRoomChange(id);
};

const LeftItem = ({item}) => {
  return (
    <li key={item.id}><Link to='/chat'>{item.name}</Link></li>
  );
}

export default LeftItem;