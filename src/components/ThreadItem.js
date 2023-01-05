/** @format */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
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
  const [allUpVotes, setAllUpVotes] = useState(upVotesBy.length);
  const [allDownVotes, setAllDownVotes] = useState(downVotesBy.length);

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
    if (authUser) {
      if (colorDownVote === false && colorUpVote === false) {
        dispatch(asyncAddUpVoteThread(id));
        setColorUpVote(true);
        setAllUpVotes(allUpVotes + 1);
        // dispatch(asyncCombineUsersAndThreads());
      } else if (colorUpVote === true) {
        dispatch(asyncAddNeutralVoteThread(id));
        setColorUpVote(false);
        setAllUpVotes(allUpVotes - 1);
        // dispatch(asyncCombineUsersAndThreads());
      } else if (colorUpVote === false && colorDownVote === true) {
        dispatch(asyncAddUpVoteThread(id));
        setColorUpVote(true);
        setColorDownVote(false);
        setAllUpVotes(allUpVotes + 1);
        setAllDownVotes(allDownVotes - 1);
        // dispatch(asyncReceiveThreadDetail(threadId));
      }
    } else {
      toast.error('kamu haru login dahulu untuk menggunakan fitur ini', {
        theme: 'colored',
      });
    }
  }

  function onDownVoteThread() {
    if (authUser) {
      if (colorDownVote === false && colorUpVote === false) {
        dispatch(asyncAddDownVoteThread(id));
        setColorDownVote(true);
        setAllDownVotes(allDownVotes + 1);
        // dispatch(asyncCombineUsersAndThreads());
      } else if (colorDownVote === true) {
        dispatch(asyncAddNeutralVoteThread(id));
        setColorDownVote(false);
        setAllDownVotes(allDownVotes - 1);
      } else if (colorDownVote === false && colorUpVote === true) {
        dispatch(asyncAddDownVoteThread(id));
        setColorDownVote(true);
        setColorUpVote(false);
        setAllDownVotes(allDownVotes + 1);
        setAllUpVotes(allUpVotes - 1);
        // dispatch(asyncReceiveThreadDetail(threadId));
      }
    } else {
      toast.error('kamu haru login dahulu untuk menggunakan fitur ini', {
        theme: 'colored',
      });
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
          <button type="submit" onClick={onUpVoteThread}>
            {colorUpVote === true ? <AiFillLike /> : <AiOutlineLike />}
          </button>
          <p>{allUpVotes}</p>
        </div>
        <div className="unvote">
          <button type="submit" onClick={onDownVoteThread}>
            {colorDownVote === true ? <AiFillDislike /> : <AiOutlineDislike />}
          </button>
          <p>{allDownVotes}</p>
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
