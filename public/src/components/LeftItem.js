import React from 'react';
import { Link } from 'react-router';

const LeftItem = (props) => {

  var { item } = props;
  
  function handleMenuClick(id) {
    console.log("menu clicked", id, props.actions)
  }

  return (
    <li key={item.id} onClick={e=>handleMenuClick(item.id)}><a>{item.name}</a></li>
  );
}

export default LeftItem;