/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import profileImage from '../image/profileDummy.svg';

function LeaderboardsTable({ leaderboards }) {
  return (
    <div>
      <table className="table-styled">
        <thead>
          <tr>
            <th>Nama Pengguna</th>
            <th>Skor</th>
          </tr>
        </thead>
        <tbody>
          {leaderboards !== null
            ? (leaderboards.map((leaderboard) => (
              <tr key={leaderboard.user.id}>
                <td className="username">
                  <img
                    src={leaderboard.user.avatar}
                    alt={leaderboard.user.id}
                  />
                  <p>{leaderboard.user.name}</p>
                </td>
                <td>{leaderboard.score}</td>
              </tr>
            )))
            : null}
        </tbody>
      </table>
    </div>
  );
}

const leaderboardShape = {
  score: PropTypes.number.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

LeaderboardsTable.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardShape)),
};

export default LeaderboardsTable;
