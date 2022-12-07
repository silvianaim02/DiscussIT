/** @format */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadInput() {
  const [text, setText] = useState('');

  //   function handleTextChange({ target }) {
  //     if (target.value.length <= 320) {
  //       setText(target.value);
  //     }
  //   }

  return (
    <div className="thread-input">
      <input className="" type="text" placeholder="judul" />
      <input className="" type="text" placeholder="kategori" />
      <textarea
        type="text"
        placeholder="Beri komentar disini"
        // value={text}
        // onChange={handleTextChange}
      />
      <div className="thread-input__button">
        <button type="submit">Buat Thread Baru</button>
      </div>
    </div>
  );
}

export default ThreadInput;
