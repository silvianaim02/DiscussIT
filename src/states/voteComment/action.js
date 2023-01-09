import { toast } from 'react-toastify';
import api from '../../utils/api';

// ACTION CREATOR
function addUpVoteCommentActionCreator(upVoteComment) {
  return {
    type: 'voteComment/up',
    payload: {
      upVoteComment,
    },
  };
}

function addNeutralVoteCommentActionCreator(neutralVoteComment) {
  return {
    type: 'voteComment/neutral',
    payload: {
      neutralVoteComment,
    },
  };
}

function addDownVoteCommentActionCreator(downVoteComment) {
  return {
    type: 'voteComment/down',
    payload: {
      downVoteComment,
    },
  };
}

// THUNK FUNCTION
function asyncAddUpVoteComment(idThread, idComment) {
  return async (dispatch) => {
    try {
      const upVoteComment = await api.toggleUpVoteComment(idThread, idComment);
      dispatch(addUpVoteCommentActionCreator(upVoteComment));
    } catch (error) {
      toast.error(error.message, {
        theme: 'colored',
      });
    }
  };
}

function asyncAddNeutralVoteComment(idThread, idComment) {
  return async (dispatch) => {
    try {
      const neutralVoteComment = await api.toggleNeutralComment(
        idThread,
        idComment
      );
      dispatch(addNeutralVoteCommentActionCreator(neutralVoteComment));
    } catch (error) {
      toast.error(error.message, {
        theme: 'colored',
      });
    }
  };
}

function asyncAddDownVoteComment(idThread, idComment) {
  return async (dispatch) => {
    try {
      const downVoteComment = await api.toggleDownVoteComment(
        idThread,
        idComment
      );
      dispatch(addDownVoteCommentActionCreator(downVoteComment));
    } catch (error) {
      toast.error(error.message, {
        theme: 'colored',
      });
    }
  };
}

export {
  addUpVoteCommentActionCreator,
  asyncAddUpVoteComment,
  addNeutralVoteCommentActionCreator,
  asyncAddNeutralVoteComment,
  addDownVoteCommentActionCreator,
  asyncAddDownVoteComment,
};
