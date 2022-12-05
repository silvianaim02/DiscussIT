/** @format */

import React from 'react';
import { IoEarthOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import ChatImg from '../image/chat.svg';

function LoginPage() {
  const dispatch = null; // @TODO: get dispatch function from store

  const onLogin = ({ id, password }) => {
    // @TODO: dispatch async action to login
  };

  return (
    <section className="login-page">
      <header className="login-page__hero">
        <img src={ChatImg} alt="chat" className="login-page__img" />
      </header>
      <article className="login-page__main">
        <h2>
          Sign In to <span className="bold-text">DiscussIT</span>
        </h2>

        <LoginInput login={onLogin} />
        <p>
          Don&apos;t have an account? <Link to="/register">Register</Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
