import React from 'react';

const Reaction = ({reaction}) => {
  return (
    <div className="reaction" onClick={() => console.log("handleReaction")}>  +  </div>
  );
}

export default Reaction;
