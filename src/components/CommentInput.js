import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setSuccessStatusActionCreator } from '../states/status/action';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

function CommentInput({ id, addComment }) {
  const { successStatus = false } = useSelector((states) => states);
  const dispatch = useDispatch();
  const [content, setContent] = useState('');

  useEffect(() => {
    if (successStatus) {
      dispatch(asyncReceiveThreadDetail(id));
      dispatch(setSuccessStatusActionCreator(false));
      setContent('');
    }
  }, [dispatch, successStatus, id]);

  function onAddComment(e) {
    e.preventDefault();
    if (content.trim()) {
      addComment({ id, content });
    }
  }

  function onCommentChange({ target }) {
    if (target.value.length <= 320) {
      setContent(target.value);
    }
  }

  return (
    <div className="comment-input">
      <textarea
        type="text"
        placeholder="Beri komentar disini"
        value={content}
        onChange={onCommentChange}
      />
      <p className="comment-input__char-left">
        <strong>{content.length}</strong>
        /320
      </p>
      <div className="comment-input__button">
        <button type="submit" onClick={onAddComment}>
          Beri Komentar
        </button>
      </div>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default CommentInput;
