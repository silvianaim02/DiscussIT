/** @format */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import BottomNavigation from '../components/BottomNavigation';
import LeaderboardsTable from '../components/LeaderboardsTable';
import Navigation from '../components/Navigation';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';
import { setSuccessStatusActionCreator } from '../states/status/action';

function LeaderboardsPage({ signOut }) {
  const dispatch = useDispatch();
  const {
    leaderboards = [],
    authUser,
    successStatus = false,
  } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);
  console.log(leaderboards);

  return (
    <div>
      <header>
        <Navigation authUser={authUser} signOut={signOut} />
      </header>
      <div className="app-container">
        <div className="leaderboards-page">
          <h1>Leaderboard Pengguna Aktif</h1>
          <LeaderboardsTable leaderboards={leaderboards} />
        </div>
      </div>
      <footer>
        <BottomNavigation />
      </footer>
    </div>
  );
}

LeaderboardsPage.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default LeaderboardsPage;
