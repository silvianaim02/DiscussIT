/**
 * @format
 * @TODO: Create Redux store
 */

import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
// import talkDetailReducer from './talkDetail/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';
import successStatusReducer from './status/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    successStatus: successStatusReducer,
    // talkDetail: talkDetailReducer,
  },
});

export default store;
