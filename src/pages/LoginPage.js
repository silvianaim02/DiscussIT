/** @format */

import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
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
      toast.success('berhasil login!', {
        theme: 'colored',
        icon: '🚀',
      });
      navigate('/');
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
          Masuk ke <span className="bold-text">DiscussIT</span>
        </h2>

        <LoginInput login={onLogin} />
        <p>
          Belum punya akun? kamu bisa <Link to="/register">Daftar</Link> disini
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
