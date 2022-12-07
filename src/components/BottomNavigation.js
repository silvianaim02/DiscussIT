/** @format */

import React from 'react';
import { GoCommentDiscussion } from 'react-icons/go';
import { VscGraph } from 'react-icons/vsc';
import { MdPostAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

const authUser = 'ada';

function BottomNavigation() {
  if (authUser === null) {
    return (
      <div className="bottom-navigation__container">
        <div className="app-container">
          <div className="bottom-navigation">
            <Link to="/" className="bottom-nav__button">
              <GoCommentDiscussion className="bottom-nav__icon" />
              <p>Threads</p>
            </Link>
            <Link to="/leaderboards" className="bottom-nav__button">
              <VscGraph className="bottom-nav__icon" />
              <p>Leaderboards</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bottom-navigation__container">
      <div className="app-container">
        <div className="bottom-navigation">
          <Link to="/" className="bottom-nav__button">
            <GoCommentDiscussion className="bottom-nav__icon" />
            <p className="label">Threads</p>
          </Link>
          <Link to="/add" className="bottom-nav__button">
            <div className="create">
              <MdPostAdd className="button-create__icon" />
              <p>Buat Diskusi</p>
            </div>
          </Link>
          <Link to="/leaderboards" className="bottom-nav__button">
            <VscGraph className="bottom-nav__icon" />
            <p className="label">Leaderboards</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BottomNavigation;
