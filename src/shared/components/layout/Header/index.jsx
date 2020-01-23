import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-light">
        {/* <a className="navbar-brand" href="/">
          <img className="nav-logo" src={OasisLogo} width="200px" />
        </a> */}
        <h1>OoHC</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item u-margin-left">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item u-margin-left">
              <a className="nav-link" href="#">
                Ministries
              </a>
            </li>
            <li className="nav-item u-margin-left">
              <a className="nav-link" href="#">
                Our Story
              </a>
            </li>
            <li className="nav-item u-margin-left">
              <a className="nav-link" href="#">
                Vist Us
              </a>
            </li>
          </ul>
        </div>
        <button type="button" className="btn btn-lg donate">
          Donate
        </button>
      </nav>
    </div>
  );
}

export default Header;
