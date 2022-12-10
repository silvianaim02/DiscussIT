/** @format */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BiCommentDetail } from 'react-icons/bi';
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
  asyncAddDownVoteThread,
  asyncAddNeutralVoteThread,
  asyncAddUpVoteThread,
} from '../states/voteThread/action';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

function ThreadDetailItem({
  id,
  title,
  body,
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  comments,
}) {
  const [colorUpVote, setColorUpVote] = useState(false);
  const [colorDownVote, setColorDownVote] = useState(false);
  const dispatch = useDispatch();

  const { authUser } = useSelector((states) => states);

  useEffect(() => {
    if (authUser) {
      const isUpVotesThread = upVotesBy.includes(authUser.id);
      const isDownVotesThread = downVotesBy.includes(authUser.id);
      if (isUpVotesThread) {
        setColorUpVote(true);
      } else {
        setColorUpVote(false);
      }
      if (isDownVotesThread) {
        setColorDownVote(true);
      } else {
        setColorDownVote(false);
      }
    } else {
      setColorUpVote(false);
      setColorDownVote(false);
    }
  }, [authUser, upVotesBy, downVotesBy]);

  function onUpVoteThread() {
    if (colorUpVote === false) {
      dispatch(asyncAddUpVoteThread(id));
      dispatch(asyncReceiveThreadDetail(id));
    } else if (colorUpVote === true) {
      dispatch(asyncAddNeutralVoteThread(id));
      dispatch(asyncReceiveThreadDetail(id));
    }
  }

  function onDownVoteThread() {
    if (colorDownVote === false) {
      dispatch(asyncAddDownVoteThread(id));
      dispatch(asyncReceiveThreadDetail(id));
    } else if (colorDownVote === true) {
      dispatch(asyncAddNeutralVoteThread(id));
      dispatch(asyncReceiveThreadDetail(id));
    }
  }

  return (
    <div className="thread-item__container">
      <div className="thread-item__top">
        <div className="avatar-uname__container">
          <img className="avatar" src={owner.avatar} alt="wkkw" />
          <p className="name">{owner.name}</p>
        </div>
        <p className="thread-item__category">#{category}</p>
      </div>
      <p className="thread-item__title">{title}</p>
      <div className="thread-detail-item__body">{parse(body)}</div>
      <div className="thread-item__icons">
        <div className="vote">
          {authUser === null ? (
            <button type="submit">
              {colorUpVote === true ? <AiFillLike /> : <AiOutlineLike />}
            </button>
          ) : (
            <button type="submit" onClick={onUpVoteThread}>
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
            <button type="submit" onClick={onDownVoteThread}>
              {colorDownVote === true ? (
                <AiFillDislike />
              ) : (
                <AiOutlineDislike />
              )}
            </button>
          )}
          <p>{downVotesBy.length}</p>
        </div>
        <div className="comment">
          <button type="submit">
            <BiCommentDetail />
          </button>
          <p>{comments.length}</p>
        </div>

        <p className="create">Dibuat {postedAt(createdAt)}</p>
      </div>
    </div>
  );
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.objectOf(PropTypes.string).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ThreadDetailItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.objectOf(PropTypes.string).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ThreadDetailItem;
