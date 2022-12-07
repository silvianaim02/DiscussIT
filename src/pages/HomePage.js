/** @format */

import React, { useEffect } from 'react';
import BottomNavigation from '../components/BottomNavigation';
import CategorySelect from '../components/CategorySelect';
import Navigation from '../components/Navigation';
import ThreadList from '../components/ThreadList';

function HomePage() {
  const { authUser = null, onSignOut } = {}; // @TODO: get threads, users, and authUser state from store

  const dispatch = null; // @TODO: get dispatch function from store

  useEffect(() => {
    // @TODO: dispatch async action to populate threads and users data
  }, [dispatch]);

  return (
    <div>
      <header>
        <Navigation authUser={authUser} signOut={onSignOut} />
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
              <ThreadList />
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

export default HomePage;
