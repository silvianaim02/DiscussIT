function leaderboardsReducer(leaderboards = null, action = {}) {
  switch (action.type) {
    case 'leaderboards/receive':
      return action.payload.leaderboards;
    default:
      return leaderboards;
  }
}

export default leaderboardsReducer;
