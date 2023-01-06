import React from 'react';
import { Link } from 'react-router-dom';

function CommentDenied() {
  return (
    <div>
      Kamu harus{' '}
      <span className="text-bold">
        <Link className="text-bold" to="/login">
          Login
        </Link>
      </span>{' '}
      terlebih dahulu untuk menambah komentar.
    </div>
  );
}

export default CommentDenied;
