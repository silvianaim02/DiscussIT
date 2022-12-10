/** @format */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';
import { postedAt } from '../utils';
import {
  asyncAddDownVoteComment,
  asyncAddNeutralVoteComment,
  asyncAddUpVoteComment,
} from '../states/voteComment/action';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

function CommentItem({
  threadId,
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
}) {
  const [colorUpVote, setColorUpVote] = useState(false);
  const [colorDownVote, setColorDownVote] = useState(false);
  const dispatch = useDispatch();

  const { authUser } = useSelector((states) => states);

  useEffect(() => {
    if (authUser) {
      const isUpVotesComment = upVotesBy.includes(authUser.id);
      const isDownVotesComment = downVotesBy.includes(authUser.id);
      if (isUpVotesComment) {
        setColorUpVote(true);
      } else {
        setColorUpVote(false);
      }
      if (isDownVotesComment) {
        setColorDownVote(true);
      } else {
        setColorDownVote(false);
      }
    } else {
      setColorUpVote(false);
      setColorDownVote(false);
    }
  }, [authUser, upVotesBy, downVotesBy]);

  function onUpVoteComment() {
    if (colorUpVote === false) {
      dispatch(asyncAddUpVoteComment(threadId, id));
      dispatch(asyncReceiveThreadDetail(threadId));
    } else if (colorUpVote === true) {
      dispatch(asyncAddNeutralVoteComment(threadId, id));
      dispatch(asyncReceiveThreadDetail(threadId));
    }
  }

  function onDownVoteComment() {
    if (colorDownVote === false) {
      dispatch(asyncAddDownVoteComment(threadId, id));
      dispatch(asyncReceiveThreadDetail(threadId));
    } else if (colorDownVote === true) {
      dispatch(asyncAddNeutralVoteComment(threadId, id));
      dispatch(asyncReceiveThreadDetail(threadId));
    }
  }

  return (
    <div className="comment-item__container">
      <div className="comment-item__top">
        <div className="avatar-uname__container">
          <img className="avatar" src={owner.avatar} alt="wkkw" />
          <p className="name">{owner.name}</p>
        </div>
      </div>
      <div className="comment-item__body">{parse(content)}</div>
      <div className="comment-item__icons">
        <div className="vote">
          {authUser === null ? (
            <button type="submit">
              {colorUpVote === true ? <AiFillLike /> : <AiOutlineLike />}
            </button>
          ) : (
            <button type="submit" onClick={onUpVoteComment}>
              {colorUpVote === true ? <AiFillLike /> : <AiOutlineLike />}
            </button>
          )}{' '}
          <p>{upVotesBy.length}</p>
        </div>
        <div className="unvote">
          {authUser === null ? (
            <button type="submit">
              {colorDownVote === true ? (
                <AiFillDislike />
              ) : (
                <AiOutlineDislike />
              )}
            </button>
          ) : (
            <button type="submit" onClick={onDownVoteComment}>
              {colorDownVote === true ? (
                <AiFillDislike />
              ) : (
                <AiOutlineDislike />
              )}
            </button>
          )}{' '}
          <p>{downVotesBy.length}</p>
        </div>

        <p className="create">Dibuat {postedAt(createdAt)}</p>
      </div>
    </div>
  );
}

CommentItem.propTypes = {
  threadId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.objectOf(PropTypes.string).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CommentItem;
