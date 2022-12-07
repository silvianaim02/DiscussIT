/** @format */

import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginInput from '../components/LoginInput';
import ChatImg from '../image/chat.svg';
import { asyncSetAuthUser } from '../states/authUser/action';
import { setSuccessStatusActionCreator } from '../states/status/action';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { successStatus = false } = useSelector((states) => states);

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  useEffect(() => {
    if (successStatus) {
      navigate('/');
      alert('berhasl');
      dispatch(setSuccessStatusActionCreator(false));
    }
  }, [dispatch, navigate, successStatus]);

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
