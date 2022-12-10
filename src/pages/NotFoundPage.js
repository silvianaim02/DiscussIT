/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import BottomNavigation from '../components/BottomNavigation';
import LeaderboardsTable from '../components/LeaderboardsTable';
import Navigation from '../components/Navigation';
import NotFound from '../components/NotFound';

function NotFoundPage({ signOut }) {
  const { leaderboards = [], authUser } = useSelector((states) => states);
  return (
    <div>
      <header>
        <Navigation authUser={authUser} signOut={signOut} />
      </header>
      <div className="app-container">
        <div className="leaderboards-page">
          <NotFound />
        </div>
      </div>
      <footer>
        <BottomNavigation />
      </footer>
    </div>
  );
}

NotFoundPage.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default NotFoundPage;
