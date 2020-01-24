import React from 'react';
import Header from '../../shared/components/layout/Header';
import './Welcome.scss';

const Welcome = () => {
  return (
    <div className="Welcome">
      <div className="topbar" />
      <div className="welcome-pad">
        <Header />
        <div className="welcome-note">
          <span className="welcome-tag">Welcome to Oasis of Hope Church</span>
          <br />
          <hr className="welcome-line" />
          <br />
          <br />
          <br />
          <span className="sub-tag">
            Psalm 27:13
            <br />
            <br />
            <br />
            <span className="sub-sub-tag">
              “I believe to see the goodness
              <br />
              of the Lord in the land of
              <br />
              living”.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
