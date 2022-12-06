/** @format */

import React from 'react';
import BottomNavigation from '../components/BottomNavigation';
import LeaderboardsTable from '../components/LeaderboardsTable';
import Navigation from '../components/Navigation';

function LeaderboardsPage() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <div className="app-container">
        <div className="leaderboards-page">
          <h1>Leaderboard Pengguna Aktif</h1>
          <LeaderboardsTable />
        </div>
      </div>
      <footer>
        <BottomNavigation />
      </footer>
    </div>
  );
}

export default LeaderboardsPage;
