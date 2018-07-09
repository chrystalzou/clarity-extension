import React from 'react';

const SetGoal = (props) => {
  return (
    <div>
      <h1>What do you want to accomplish?</h1>
      <input type="text"></input>
      <button onClick={props.click}>Go!</button>
    </div>
  )
}

export default SetGoal;