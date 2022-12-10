/** @format */

import { toast } from 'react-toastify';
import api from '../../utils/api';

const ActionType = {
  TOGGLE_UP_VOTE_THREAD: 'TOGGLE_UP_VOTE_THREAD',
};

function addUpVoteThreadActionCreator(upVoteThread) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_THREAD,
    payload: {
      upVoteThread,
    },
  };
}

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

export { ActionType, addUpVoteThreadActionCreator, asyncAddUpVoteThread };
