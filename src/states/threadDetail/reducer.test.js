/**
 * test scenario for threadDetailReducer
 *
 *    threadDetailReducer function
 *  - should return the initial state when given by UNKNOWN action
 *  - should return the threadDetail when given by RECEIVE_THREAD_DETAIL action
 *  - should return null when given by CLEAR_THREAD_DETAIL action
 */

import threadDetailReducer from './reducer';

describe('===== threadDetailReducer function =====', () => {
  // test case 1
  it('should return the initial state when given by UNKNOWN action', () => {
    // arange
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  // test case 2
  it('should return the threadDetail when given by RECEIVE_THREAD_DETAIL action', () => {
    // arange
    const initialState = null;
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [],
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  // test case 3
  it('should return null when given by CLEAR_THREAD_DETAIL action', () => {
    // arange
    const initialState = null;
    const action = { type: 'CLEAR_THREAD_DETAIL', payload: null };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload);
  });
});
