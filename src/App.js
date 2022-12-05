/** @format */

import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import RegisterPage from './pages/RegisterPage';
import DetailPage from './pages/DetailPage';
import AddThreadPage from './pages/AddThreadPage';
import LeaderboardsPage from './pages/LeaderboardsPage';

function App() {
  const { authUser = 'sementara ada', isPreload = false } = {}; // @TODO: get authUser and isPreLoad state from store

  const dispatch = null; // @TODO: get dispatch function from store

  useEffect(() => {
    // @TODO: dispatch async action to preload app
  }, [dispatch]);

  const onSignOut = () => {
    // @TODO: dispatch async action to sign out
  };

  if (isPreload) {
    return null;
  }

  return (
    <>
      <Loading />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/threads/:id" element={<DetailPage />} />
          <Route path="/add" element={<AddThreadPage />} />
          <Route path="/leaderboards" element={<LeaderboardsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
