import React from 'react';

const Action = props => {
    return (
      <div>
        <button onClick={props.handleChooseOption} disabled={!props.hasOption}>
          What should I do?
        </button>
      </div>
    );
  };

  export default Action;