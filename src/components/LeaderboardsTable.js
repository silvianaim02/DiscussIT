import React from 'react';
import PropTypes from 'prop-types';
import StyledTable from './styled/StyledTable';

function LeaderboardsTable({ leaderboards, columnOne, columnTwo, type }) {
  // background color
  const backgroundColor = {
    softPurple: '#bab0ff',
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3',
  };

  return (
    <div>
      <StyledTable backgroundColor={backgroundColor[type]}>
        <thead>
          <tr>
            <th>{columnOne}</th>
            <th>{columnTwo}</th>
          </tr>
        </thead>
        <tbody>
          {leaderboards !== null
            ? leaderboards.map((leaderboard) => (
                <tr key={leaderboard.user.id}>
                  <td className="username" style={{ padding: '12px 15px' }}>
                    <img
                      src={leaderboard.user.avatar}
                      alt={leaderboard.user.id}
                    />
                    <p>{leaderboard.user.name}</p>
                  </td>
                  <td style={{ padding: '12px 15px' }}>{leaderboard.score}</td>
                </tr>
              ))
            : null}
        </tbody>
      </StyledTable>
    </div>
  );
}

const leaderboardShape = {
  score: PropTypes.number.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

LeaderboardsTable.propTypes = {
  /** the content of table (you not allowed to change it) */
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardShape)),
  /** the content of top column 1  */
  columnOne: PropTypes.string.isRequired,
  /** the content of top column 2  */
  columnTwo: PropTypes.string.isRequired,
  /** Type of top column background, it will change the background color of top column  */
  type: PropTypes.oneOf(['softPurple', 'success', 'error', 'warning', 'info'])
    .isRequired,
};

export default LeaderboardsTable;
