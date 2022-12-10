/** @format */

import { toast } from 'react-toastify';
import api from '../../utils/api';

const ActionType = {
  TOGGLE_UP_VOTE_THREAD: 'TOGGLE_UP_VOTE_THREAD',
  TOGGLE_NEUTRAL_VOTE_THREAD: 'TOGGLE_NEUTRAL_VOTE_THREAD',
  TOGGLE_DOWN_VOTE_THREAD: 'TOGGLE_DOWN_VOTE_THREAD',
};

// ACTION CREATOR
function addUpVoteThreadActionCreator(upVoteThread) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_THREAD,
    payload: {
      upVoteThread,
    },
  };
}

function addNeutralVoteThreadActionCreator(neutralVoteThread) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_VOTE_THREAD,
    payload: {
      neutralVoteThread,
    },
  };
}

function addDownVoteThreadActionCreator(downVoteThread) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_THREAD,
    payload: {
      downVoteThread,
    },
  };
}

// THUNK FUNCTION
function asyncAddUpVoteThread(id) {
  return async (dispatch) => {
    try {
      const upVoteThread = await api.toggleUpVoteThread(id);
      dispatch(addUpVoteThreadActionCreator(upVoteThread));
    } catch (error) {
      toast.error(error.message, {
        theme: 'colored',
      });
    }
  };
}

function asyncAddNeutralVoteThread(id) {
  return async (dispatch) => {
    try {
      const neutralVoteThread = await api.toggleNeutralThread(id);
      dispatch(addNeutralVoteThreadActionCreator(neutralVoteThread));
    } catch (error) {
      toast.error(error.message, {
        theme: 'colored',
      });
    }
  };
}

function asyncAddDownVoteThread(id) {
  return async (dispatch) => {
    try {
      const downVoteThread = await api.toggleDownVoteThread(id);
      dispatch(addDownVoteThreadActionCreator(downVoteThread));
    } catch (error) {
      toast.error(error.message, {
        theme: 'colored',
      });
    }
  };
}

export {
  ActionType,
  addUpVoteThreadActionCreator,
  asyncAddUpVoteThread,
  addNeutralVoteThreadActionCreator,
  asyncAddNeutralVoteThread,
  addDownVoteThreadActionCreator,
  asyncAddDownVoteThread,
};
