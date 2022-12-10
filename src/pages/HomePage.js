/** @format */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation';
import CategorySelect from '../components/CategorySelect';
import Navigation from '../components/Navigation';
import ThreadList from '../components/ThreadList';
import { asyncUnsetAuthUser } from '../states/authUser/action';
import { asyncCombineUsersAndThreads } from '../states/shared/action';

function HomePage({ signOut }) {
  const { threads, users, authUser } = useSelector((states) => states);

  const dispatch = useDispatch(); // @TODO: get dispatch function from store\
  const navigate = useNavigate();

  useEffect(() => {
    // @TODO: dispatch async action to populate threads and users data
    dispatch(asyncCombineUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

  console.log(threadList);

  return (
    <div>
      <header>
        <Navigation authUser={authUser} signOut={signOut} />
      </header>
      <div className="app-container">
        <section className="home-page">
          {/* Judul Ktegori */}
          <div className="category-container">
            <h1>Kategori Terpopuler</h1>
            <CategorySelect />
          </div>

          {/* Judul Card */}
          <div className="card-list-container">
            <h1>Thread Diskusi Tersedia</h1>
            <p className="card-list__info">
              Wadah bagi penggiat IT untuk bertanya dan menjawab sebuah
              pertanyaan seputar permasalahan IT
            </p>
            <div className="card-list__list">
              {threadList.length === 0 ? (
                <p className="not-found">Thread Belum muncul</p>
              ) : (
                <ThreadList threads={threadList} />
              )}
            </div>
          </div>

          {/* List Card */}
        </section>
      </div>
      <footer>
        <BottomNavigation />
      </footer>
    </div>
  );
}

HomePage.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default HomePage;
