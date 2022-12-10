/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import CommentItem from './CommentItem';
import ThreadDetailItem from './ThreadDetailItem';
import CommentInput from './CommentInput';
import CommentDenied from './CommentDenied';
import { asyncAddComment } from '../states/threadDetail/action';

function ThreadDetail({
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
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  const onAddComment = ({ content }) => {
    dispatch(asyncAddComment({ id, content }));
  };

  return (
    <>
      <section className="thread-detail">
        <ThreadDetailItem
          id={id}
          title={title}
          body={body}
          category={category}
          createdAt={createdAt}
          owner={owner}
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
            <CommentInput id={id} addComment={onAddComment} />
          </div>
        )}
      </section>
      <section className="comment-section">
        <p className="comment-gap-vertical title-section">
          Komentar ({comments.length})
        </p>
        <hr className="comment-gap-vertical" />
        <div className="comment-list comment-gap-vertical">
          {comments.map((comment) => (
            <CommentItem threadId={id} key={comment.id} {...comment} />
          ))}
        </div>
      </section>
    </>
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

ThreadDetail.propTypes = {
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

export default ThreadDetail;
