import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../utils/api';
import { setSuccessStatusActionCreator } from '../status/action';

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: 'threadDetail/receive',
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: 'threadDetail/clear',
  };
}

function addCommentActionCreator(threadDetail) {
  return {
    type: 'comment/add',
    payload: {
      threadDetail,
    },
  };
}

// THUNK FUNCTION
function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());
    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      toast.error(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddComment({ id, content }) {
  return async (dispatch) => {
    try {
      const comment = await api.createComment({ id, content });
      dispatch(addCommentActionCreator(comment));
      dispatch(setSuccessStatusActionCreator(true));
    } catch (error) {
      toast.error(error.message, {
        theme: 'colored',
      });
    }
  };
}

export {
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  addCommentActionCreator,
  asyncAddComment,
};
