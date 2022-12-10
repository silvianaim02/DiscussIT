/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import logoDiscussIT from '../image/DiscussIT.png';

function Navigation({ authUser, signOut }) {
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
            <img className="avatar" src={authUser.avatar} alt={authUser.id} />
            <div className="logout-container">
              <button type="button" onClick={signOut}>
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

const authUserShape = {
  name: PropTypes.string,
  email: PropTypes.string,
  photo: PropTypes.string,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape),
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
