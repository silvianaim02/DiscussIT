/**
 * test scenario for voteThreadReducer
 *
 *    votesThreadReducer function
 *  - should return the initial state when given by UNKNOWN action
 *  - should return the vote with the upVoteThread value when given by voteThread/up action
 *  - should return the vote with the downVoteThread value when given by voteThread/down action
 *  - should return the vote with the neutralVoteThread value when given by voteThread/down action
 */

import votesThreadReducer from './reducer';

describe('===== votesThreadReducer function =====', () => {
  it('should return the initial state when given by UNKNOWN action', () => {
    // arange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = votesThreadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the vote with the upVoteThread value when given by voteThread/up action', () => {
    // arange
    const initialState = [];
    const action = {
      type: 'voteThread/up',
      payload: {
        upVoteThread: {
          id: 'vote-1',
          userId: 'users-1',
          threadId: 'thread-1',
          voteType: 1,
        },
      },
    };

    // action
    const nextState = votesThreadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.upVoteThread);
  });

  it('should return the vote with the downVoteThread value when given by voteThread/down action', () => {
    // arange
    const initialState = [];
    const action = {
      type: 'voteThread/down',
      payload: {
        downVoteThread: {
          id: 'vote-1',
          userId: 'users-1',
          threadId: 'thread-1',
          voteType: -1,
        },
      },
    };

    // action
    const nextState = votesThreadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.downVoteThread);
  });

  it('should return the vote with the neutralVoteThread value when given by voteThread/neutral action', () => {
    // arange
    const initialState = [];
    const action = {
      type: 'voteThread/neutral',
      payload: {
        neutralVoteThread: {
          id: 'vote-1',
          userId: 'users-1',
          threadId: 'thread-1',
          voteType: 0,
        },
      },
    };

    // action
    const nextState = votesThreadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.neutralVoteThread);
  });
});
