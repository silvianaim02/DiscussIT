/** @format */

import React from 'react';
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
    </div>
  );
}

export default LeaderboardsPage;
