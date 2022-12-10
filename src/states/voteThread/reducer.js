/** @format */

// ngambil dari state

import { ActionType } from './actions';

function votesThreadReducer(votesThread = [], action = {}) {
  switch (action.type) {
    case ActionType.TOGGLE_UP_VOTE_THREAD:
      return action.payload.upVoteThread;
    default:
      return votesThread;
  }
}

export default votesThreadReducer;
