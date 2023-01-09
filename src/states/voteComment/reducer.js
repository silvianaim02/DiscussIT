function votesCommentReducer(votesComment = [], action = {}) {
  switch (action.type) {
    case 'voteComment/up':
      return action.payload.upVoteComment;
    case 'voteComment/neutral':
      return action.payload.neutralVoteComment;
    case 'voteComment/down':
      return action.payload.downVoteComment;
    default:
      return votesComment;
  }
}

export default votesCommentReducer;
