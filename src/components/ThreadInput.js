/** @format */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import useInput from '../hooks/useInput';
import { setSuccessStatusActionCreator } from '../states/status/action';

function ThreadInput({ addThread }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { successStatus = false } = useSelector((states) => states);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (successStatus) {
      navigate('/');
      toast.success('berhasil menambahkan thread!', {
        theme: 'colored',
        icon: '🚀',
      });
      dispatch(setSuccessStatusActionCreator(false));
      setTitle('');
      setBody('');
      setCategory('');
    }
  }, [dispatch, navigate, successStatus]);

  function onAddThread() {
    if (body.trim()) {
      addThread({ title, body, category });
    }
  }

  function onTitleChange({ target }) {
    setTitle(target.value);
  }

  function onBodyChange({ target }) {
    setBody(target.value);
  }

  function onCategoryChange({ target }) {
    setCategory(target.value);
  }

  return (
    <div className="thread-input">
      <input
        className=""
        type="text"
        placeholder="judul"
        value={title}
        onChange={onTitleChange}
      />
      <input
        className=""
        type="text"
        placeholder="kategori"
        value={category}
        onChange={onCategoryChange}
      />
      <textarea
        type="text"
        placeholder="Beri komentar disini"
        value={body}
        onChange={onBodyChange}
      />
      <div className="thread-input__button">
        <button type="submit" onClick={onAddThread}>
          Buat Thread Baru
        </button>
      </div>
    </div>
  );
}
ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
