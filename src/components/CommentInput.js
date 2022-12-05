/** @format */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CommentInput({ addTalk }) {
  const [text, setText] = useState('');

  function addtalk() {
    if (text.trim()) {
      addTalk(text);
      setText('');
    }
  }

  function handleTextChange({ target }) {
    if (target.value.length <= 320) {
      setText(target.value);
    }
  }

  return (
    <div className="talk-input">
      <textarea
        type="text"
        placeholder="Beri komentar disini"
        value={text}
        onChange={handleTextChange}
      />
      <p className="talk-input__char-left">
        <strong>{text.length}</strong>
        /320
      </p>
      <div className="talk-input__button">
        <button type="submit" onClick={addtalk}>
          Beri Komentar
        </button>
      </div>
    </div>
  );
}

CommentInput.propTypes = {
  addTalk: PropTypes.func.isRequired,
};

export default CommentInput;
