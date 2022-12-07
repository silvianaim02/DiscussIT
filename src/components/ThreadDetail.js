/** @format */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ThreadItem from './ThreadItem';
import CommentItem from './CommentItem';
import ThreadDetailItem from './ThreadDetailItem';
import CommentInput from './CommentInput';
import CommentDenied from './CommentDenied';

function ThreadDetail({
  id,
  title,
  body,
  category,
  createdAt,
  ownerId,
  totalComments,
  upVotesBy,
  downVotesBy,
  comments,
}) {
  const authUser = 'ada';

  return (
    <>
      <section className="thread-detail">
        <ThreadDetailItem
          id={id}
          title={title}
          body={body}
          category={category}
          createdAt={createdAt}
          ownerId={ownerId}
          totalComments={totalComments}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
          comments={comments}
        />
      </section>
      <section className="create-comment__section">
        {authUser === null ? (
          <div className="unauthenticated-comment">
            <CommentDenied />
          </div>
        ) : (
          <div className="authenticated-comment">
            <CommentInput />
          </div>
        )}
      </section>
      <section className="comment-section">
        <p className="comment-gap-vertical title-section">
          Komentar ({totalComments})
        </p>
        <hr className="comment-gap-vertical" />
        <div className="comment-list comment-gap-vertical">
          {comments.map((comment) => (
            <CommentItem {...comment} />
          ))}
        </div>
      </section>
    </>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  comments: PropTypes.arrayOf().isRequired,
};

export default ThreadDetail;
