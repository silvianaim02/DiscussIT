/** @format */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Navigation from '../components/Navigation';
import ThreadInput from '../components/ThreadInput';
import { asyncAddThread } from '../states/threads/action';
import { setSuccessStatusActionCreator } from '../states/status/action';

function AddThreadPage({ signOut }) {
  const { authUser, successStatus = false } = useSelector((states) => states);
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
