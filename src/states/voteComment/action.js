import { toast } from 'react-toastify';
import api from '../../utils/api';

const ActionType = {
  TOGGLE_UP_VOTE_COMMENT: 'TOGGLE_UP_VOTE_COMMENT',
  TOGGLE_NEUTRAL_VOTE_COMMENT: 'TOGGLE_NEUTRAL_VOTE_COMMENT',
  TOGGLE_DOWN_VOTE_COMMENT: 'TOGGLE_DOWN_VOTE_COMMENT',
};

// ACTION CREATOR
function addUpVoteCommentActionCreator(upVoteComment) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_COMMENT,
    payload: {
      upVoteComment,
    },
  };
}

function addNeutralVoteCommentActionCreator(neutralVoteComment) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_VOTE_COMMENT,
    payload: {
      neutralVoteComment,
    },
  };
}

function addDownVoteCommentActionCreator(downVoteComment) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_COMMENT,
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
  ActionType,
  addUpVoteCommentActionCreator,
  asyncAddUpVoteComment,
  addNeutralVoteCommentActionCreator,
  asyncAddNeutralVoteComment,
  addDownVoteCommentActionCreator,
  asyncAddDownVoteComment,
};
