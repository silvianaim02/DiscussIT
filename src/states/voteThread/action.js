import { toast } from 'react-toastify';
import api from '../../utils/api';

// ACTION CREATOR
function addUpVoteThreadActionCreator(upVoteThread) {
  return {
    type: 'voteThread/up',
    payload: {
      upVoteThread,
    },
  };
}

function addNeutralVoteThreadActionCreator(neutralVoteThread) {
  return {
    type: 'voteThread/neutral',
    payload: {
      neutralVoteThread,
    },
  };
}

function addDownVoteThreadActionCreator(downVoteThread) {
  return {
    type: 'voteThread/down',
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
  addUpVoteThreadActionCreator,
  asyncAddUpVoteThread,
  addNeutralVoteThreadActionCreator,
  asyncAddNeutralVoteThread,
  addDownVoteThreadActionCreator,
  asyncAddDownVoteThread,
};
