import React, { useState } from 'react';

const Voting = () => {
  const [yesCount, setYesCount] = useState(0);
  const [noCount, setNoCount] = useState(0);

  const handleVote = (vote) => {
    if (vote === 'yes') {
      setYesCount(yesCount + 1);
    } else {
      setNoCount(noCount + 1);
    }
  };

  return (
    <div>
      <h2>Vote for your favorite option:</h2>
      <button onClick={() => handleVote('yes')}>Yes</button>
      <button onClick={() => handleVote('no')}>No</button>
      <p>Yes: {yesCount} votes</p>
      <p>No: {noCount} votes</p>
    </div>
  );
};

export default Voting;
