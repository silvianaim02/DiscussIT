/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import { BiDownvote, BiUpvote } from 'react-icons/bi';
import { postedAt, getIndexItemById } from '../utils';

function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
}) {
  const printName = (userId, datas) => {
    const item = getIndexItemById(userId, datas);
    return item[0].name;
  };

  const printAvatar = (userId, datas) => {
    const item = getIndexItemById(userId, datas);
    return item[0].avatar;
  };

  console.log(id);

  return (
    <div className="comment-item__container">
      <div className="comment-item__top">
        <div className="avatar-uname__container">
          <img className="avatar" src={owner.avatar} alt="wkkw" />
          <p className="name">{owner.name}</p>
        </div>
      </div>
      <p className="comment-item__body">{content}</p>
      <div className="comment-item__icons">
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

        <p className="create">Dibuat {postedAt(createdAt)}</p>
      </div>
    </div>
  );
}

CommentItem.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.objectOf(PropTypes.string).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CommentItem;
