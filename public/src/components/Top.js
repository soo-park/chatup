import React from 'react';

const Top = ({currentRoom, userName}) => { 
  return (
    <header className="top bounding">
      <div className="top-name"> {currentRoom ? currentRoom.name : ""} </div>
      <div>
        <span className="red-text">{userName}</span>
        <span>{currentRoom ? currentRoom.users.map(user => ", " + user): ""}</span>
      </div>
    </header>
  )
};

export default Top;
