/** @format */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BiCommentDetail, BiDownvote, BiUpvote } from 'react-icons/bi';
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { users } from '../utils/usersDummy';
import { postedAt, getIndexItemById } from '../utils';
import { asyncAddUpVoteThread } from '../states/voteThread/actions';
import { asyncCombineUsersAndThreads } from '../states/shared/action';

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  ownerId,
  totalComments,
  upVotesBy,
  downVotesBy,
  user,
}) {
  const [colorUpVote, setColorUpVote] = useState(false);
  const dispatch = useDispatch();

  const { authUser } = useSelector((states) => states);

  // const isUpVotesThreads = upVotesBy.includes(authUser.id);
  // if (isUpVotesThread === false) {
  //   setColorUpVote(false);
  // }

  useEffect(() => {
    if (authUser) {
      const isUpVotesThread = upVotesBy.includes(authUser.id || '');
      if (isUpVotesThread) {
        setColorUpVote(true);
      } else {
        setColorUpVote(false);
      }
    } else {
      setColorUpVote(false);
    }
  }, [authUser, upVotesBy]);

  function onUpVoteThread() {
    if (colorUpVote) {
      alert('cancel vote');
    } else {
      dispatch(asyncAddUpVoteThread(id));
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
      <p className="thread-item__body">{body}</p>
      <Link to={`/threads/${id}`}>Selengkapnya</Link>
      <div className="thread-item__icons">
        <div className="vote">
          <button type="submit" onClick={onUpVoteThread}>
            {colorUpVote === true ? <AiFillLike /> : <AiOutlineLike />}
          </button>{' '}
          <p>{upVotesBy.length}</p>
        </div>
        <div className="unvote">
          <button type="submit">
            <BiDownvote />
          </button>
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
  ownerId: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ThreadItem;
