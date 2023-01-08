import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';
import { postedAt } from '../utils';
import {
  asyncAddDownVoteComment,
  asyncAddNeutralVoteComment,
  asyncAddUpVoteComment,
} from '../states/voteComment/action';

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
  const [allUpVotes, setAllUpVotes] = useState(upVotesBy.length);
  const [allDownVotes, setAllDownVotes] = useState(downVotesBy.length);

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
    if (authUser) {
      if (colorUpVote === false && colorDownVote === false) {
        dispatch(asyncAddUpVoteComment(threadId, id));
        setColorUpVote(true);
        setAllUpVotes(allUpVotes + 1);
        // dispatch(asyncReceiveThreadDetail(threadId));
      } else if (colorUpVote === true) {
        dispatch(asyncAddNeutralVoteComment(threadId, id));
        setColorUpVote(false);
        setAllUpVotes(allUpVotes - 1);
        // dispatch(asyncReceiveThreadDetail(threadId));
      } else if (colorUpVote === false && colorDownVote === true) {
        dispatch(asyncAddUpVoteComment(threadId, id));
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

  function onDownVoteComment() {
    if (authUser) {
      if (colorDownVote === false && colorUpVote === false) {
        dispatch(asyncAddDownVoteComment(threadId, id));
        setColorDownVote(true);
        setAllDownVotes(allDownVotes + 1);
        // dispatch(asyncReceiveThreadDetail(threadId));
      } else if (colorDownVote === true) {
        dispatch(asyncAddNeutralVoteComment(threadId, id));
        setColorDownVote(false);
        setAllDownVotes(allDownVotes - 1);
        // dispatch(asyncReceiveThreadDetail(threadId));
      } else if (colorDownVote === false && colorUpVote === true) {
        dispatch(asyncAddDownVoteComment(threadId, id));
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
    // Container
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
          <button type="submit" onClick={onUpVoteComment}>
            {colorUpVote === true ? <AiFillLike /> : <AiOutlineLike />}
          </button>
          <p>{allUpVotes}</p>
        </div>
        <div className="unvote">
          <button type="submit" onClick={onDownVoteComment}>
            {colorDownVote === true ? <AiFillDislike /> : <AiOutlineDislike />}
          </button>
          <p>{allDownVotes}</p>
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
