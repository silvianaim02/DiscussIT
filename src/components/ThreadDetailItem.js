/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import { BiCommentDetail, BiDownvote, BiUpvote } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { users } from '../utils/usersDummy';
import { postedAt, getIndexItemById } from '../utils';

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
  const printName = (userId, datas) => {
    const item = getIndexItemById(userId, datas);
    return item[0].name;
  };

  const printAvatar = (userId, datas) => {
    const item = getIndexItemById(userId, datas);
    return item[0].avatar;
  };

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
      <p className="thread-detail-item__body">{body}</p>
      <div className="thread-item__icons">
        <div className="vote">
          <button type="submit">
            <BiUpvote />
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
