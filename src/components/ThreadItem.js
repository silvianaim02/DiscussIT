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
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';
import { postedAt } from '../utils';
import {
  asyncAddDownVoteThread,
  asyncAddNeutralVoteThread,
  asyncAddUpVoteThread,
} from '../states/voteThread/action';
import { asyncCombineUsersAndThreads } from '../states/shared/action';

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  totalComments,
  upVotesBy,
  downVotesBy,
  user,
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
      dispatch(asyncCombineUsersAndThreads());
    } else if (colorUpVote === true) {
      dispatch(asyncAddNeutralVoteThread(id));
      dispatch(asyncCombineUsersAndThreads());
    }
  }

  function onDownVoteThread() {
    if (colorDownVote === false) {
      dispatch(asyncAddDownVoteThread(id));
      dispatch(asyncCombineUsersAndThreads());
    } else if (colorDownVote === true) {
      dispatch(asyncAddNeutralVoteThread(id));
      dispatch(asyncCombineUsersAndThreads());
    }
  }

  return (
    <div className="thread-item__container">
      <div className="thread-item__top">
        <div className="avatar-uname__container">
          <img className="avatar" src={user.avatar} alt="wkkw" />
          <p className="name">{user.name}</p>
        </div>
        <p className="thread-item__category">#{category}</p>
      </div>
      <Link to={`/threads/${id}`}>
        <p className="thread-item__title">{title}</p>
      </Link>
      <div className="thread-item__body">{parse(body)}</div>
      <Link to={`/threads/${id}`}>Selengkapnya</Link>
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
          )}{' '}
          <p>{downVotesBy.length}</p>
        </div>
        <div className="comment">
          <button type="submit">
            <BiCommentDetail />
          </button>
          <p>{totalComments}</p>
        </div>

        <p className="create">Dibuat {postedAt(createdAt)}</p>
      </div>
    </div>
  );
}

ThreadItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ThreadItem;
