import React from 'react';
import './Welcome.scss';

const Welcome = () => {
  return (
    <div className="Welcome">
      <span className="welcome-tag">Welcome to Oasis of Hope Church</span>
      <br />
      <hr />
      <span className="sub-tag">Psalm 27:13</span>
      <span className="sub-sub-tag">
        “I believe to see the goodness of the Lord in the land of the living”.
      </span>
    </div>
  );
};

export default Welcome;
