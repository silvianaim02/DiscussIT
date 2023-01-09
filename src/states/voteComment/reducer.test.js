/**
 * test scenario for voteCommentReducer
 *
 *    votesCommentReducer function
 *  - should return the initial state when given by UNKNOWN action
 *  - should return the vote with the upVoteComment value when given by voteComment/up action
 *  - should return the vote with the downVoteComment value when given by voteComment/down action
 *  - should return the vote with the neutralVoteComment value when given by voteComment/down action
 */

import votesCommentReducer from './reducer';

describe('===== votesCommentReducer function =====', () => {
  it('should return the initial state when given by UNKNOWN action', () => {
    // arange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = votesCommentReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the vote with the upVoteComment value when given by voteComment/up action', () => {
    // arange
    const initialState = [];
    const action = {
      type: 'voteComment/up',
      payload: {
        upVoteComment: {
          id: 'vote-1',
          userId: 'users-1',
          commentId: 'comment-1',
          voteType: 1,
        },
      },
    };

    // action
    const nextState = votesCommentReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.upVoteComment);
  });

  it('should return the vote with the downVoteComment value when given by voteComment/down action', () => {
    // arange
    const initialState = [];
    const action = {
      type: 'voteComment/down',
      payload: {
        downVoteComment: {
          id: 'vote-1',
          userId: 'users-1',
          commentId: 'comment-1',
          voteType: -1,
        },
      },
    };

    // action
    const nextState = votesCommentReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.downVoteComment);
  });

  it('should return the vote with the neutralVoteComment value when given by voteComment/neutral action', () => {
    // arange
    const initialState = [];
    const action = {
      type: 'voteComment/neutral',
      payload: {
        neutralVoteComment: {
          id: 'vote-1',
          userId: 'users-1',
          commentId: 'comment-1',
          voteType: 0,
        },
      },
    };

    // action
    const nextState = votesCommentReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.neutralVoteComment);
  });
});
