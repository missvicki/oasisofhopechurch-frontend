import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className="Header">
      <div className="row">
        <div className="head col-md-6">Oasis of Hope Church</div>
        <div className="menu col-md-3">
          <ul className="nav justify-content-end u-margin-right">
            <li className="nav-item u-margin-left">
              <a className="nav-link active" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item u-margin-left">
              <a className="nav-link" href="#">
                MINISTRIES
              </a>
            </li>
            <li className="nav-item u-margin-left">
              <a className="nav-link" href="#">
                ABOUT
              </a>
            </li>
            <li className="nav-item u-margin-left">
              <a className="nav-link" href="#">
                VISIT US
              </a>
            </li>
          </ul>
        </div>
        <div className="donate col-md-3">
          <button type="button" className="btn">
            DONATE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
