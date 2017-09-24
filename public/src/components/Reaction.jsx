import React from 'react';

class Reaction extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        reaction: +
      }
    }  


    handleReaction() {
      // FIXME: mouse change on to arrow
      // FIXME: CSS for the reaction
      // V2: balloon reactions

      console.log(this);
      

    }

    
    return (
      <div className="reaction" onClick={this.handleReaction.bind(this)}>  +  </div>
    )
  }
}


export default Reaction;
