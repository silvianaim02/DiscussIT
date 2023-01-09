function votesThreadReducer(votesThread = [], action = {}) {
  switch (action.type) {
    case 'voteThread/up':
      return action.payload.upVoteThread;
    case 'voteThread/neutral':
      return action.payload.neutralVoteThread;
    case 'voteThread/down':
      return action.payload.downVoteThread;
    default:
      return votesThread;
  }
}

export default votesThreadReducer;
