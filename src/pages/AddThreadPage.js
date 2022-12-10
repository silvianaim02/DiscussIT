/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BiArrowBack } from 'react-icons/bi';
import Navigation from '../components/Navigation';
import ThreadInput from '../components/ThreadInput';
import { asyncAddThread } from '../states/threads/action';

function AddThreadPage({ signOut }) {
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  return (
    <div>
      <header>
        <Navigation authUser={authUser} signOut={signOut} />
      </header>
      <div className="app-container">
        <section className="add-page">
          <button
            type="submit"
            onClick={() => navigate(-1)}
            className="back-button"
          >
            <BiArrowBack />
          </button>
          <h1>Buat Diskusi Baru</h1>
          <ThreadInput addThread={onAddThread} />
        </section>
      </div>
    </div>
  );
}

AddThreadPage.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default AddThreadPage;
