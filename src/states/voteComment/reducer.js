import { ActionType } from './action';

function votesCommentReducer(votesComment = [], action = {}) {
  switch (action.type) {
    case ActionType.TOGGLE_UP_VOTE_COMMENT:
      return action.payload.upVoteComment;
    case ActionType.TOGGLE_NEUTRAL_VOTE_COMMENT:
      return action.payload.neutralVoteComment;
    case ActionType.TOGGLE_DOWN_VOTE_COMMENT:
      return action.payload.downVoteComment;
    default:
      return votesComment;
  }
}

export default votesCommentReducer;
