/**
 * test scenario for voteCommentReducer
 *
 *    votesCommentReducer function
 *  - should return the initial state when given by UNKNOWN action
 *  - should return the vote with the upVoteComment value when given by TOGGLE_UP_VOTE_COMMENT action
 *  - should return the vote with the downVoteComment value when given by TOGGLE_DOWN_VOTE_COMMENT action
 *  - should return the vote with the neutralVoteComment value when given by TOGGLE_DOWN_VOTE_COMMENT action
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

  it('should return the vote with the upVoteComment value when given by TOGGLE_UP_VOTE_COMMENT action', () => {
    // arange
    const initialState = [];
    const action = {
      type: 'TOGGLE_UP_VOTE_COMMENT',
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

  it('should return the vote with the downVoteComment value when given by TOGGLE_DOWN_VOTE_COMMENT action', () => {
    // arange
    const initialState = [];
    const action = {
      type: 'TOGGLE_DOWN_VOTE_COMMENT',
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

  it('should return the vote with the neutralVoteComment value when given by TOGGLE_NEUTRAL_VOTE_COMMENT action', () => {
    // arange
    const initialState = [];
    const action = {
      type: 'TOGGLE_NEUTRAL_VOTE_COMMENT',
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
