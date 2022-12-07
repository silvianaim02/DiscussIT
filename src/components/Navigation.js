/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import logoDiscussIT from '../image/logo.png';
import profileDummy from '../image/profileDummy.svg';

function Navigation() {
  // const { id, photo, name } = authUser;
  const authUser = null;

  if (authUser === null) {
    return (
      <div className="navigation-container">
        <div className="app-container">
          <div className="navigation">
            <nav>
              <Link to="/">
                <img src={logoDiscussIT} alt="logo" />
              </Link>
            </nav>
            <div className="right-nav__container">
              <div className="login-container">
                <Link className="button" to="/login">
                  <span className="login-icon">
                    <BiLogIn />
                  </span>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="navigation-container">
      <div className="app-container">
        <div className="navigation">
          <nav>
            <Link to="/">
              <img src={logoDiscussIT} alt="logo" />
            </Link>
          </nav>
          <div className="right-nav__container">
            <img className="avatar" src={profileDummy} alt="wkkw" />
            <div className="logout-container">
              <button type="button">
                <span className="logout-icon">
                  <BiLogOut />
                </span>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// const authUserShape = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   photo: PropTypes.string.isRequired,
// };

Navigation.propTypes = {
  // authUser: PropTypes.shape(authUserShape).isRequired,
  // signOut: PropTypes.func.isRequired,
};

export default Navigation;
