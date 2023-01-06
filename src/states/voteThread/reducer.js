import { ActionType } from './action';

function votesThreadReducer(votesThread = [], action = {}) {
  switch (action.type) {
    case ActionType.TOGGLE_UP_VOTE_THREAD:
      return action.payload.upVoteThread;
    case ActionType.TOGGLE_NEUTRAL_VOTE_THREAD:
      return action.payload.neutralVoteThread;
    case ActionType.TOGGLE_DOWN_VOTE_THREAD:
      return action.payload.downVoteThread;
    default:
      return votesThread;
  }
}

export default votesThreadReducer;
