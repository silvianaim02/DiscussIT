/** @format */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CommentInput() {
  const [text, setText] = useState('');

  function handleTextChange({ target }) {
    if (target.value.length <= 320) {
      setText(target.value);
    }
  }

  return (
    <div className="comment-input">
      <textarea
        type="text"
        placeholder="Beri komentar disini"
        value={text}
        onChange={handleTextChange}
      />
      <p className="comment-input__char-left">
        <strong>{text.length}</strong>
        /320
      </p>
      <div className="comment-input__button">
        <button type="submit">Beri Komentar</button>
      </div>
    </div>
  );
}

// CommentInput.propTypes = {

// };

export default CommentInput;
