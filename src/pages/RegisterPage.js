import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import RegisterInput from '../components/RegisterInput';
import ChatImg from '../image/chat.svg';
import { asyncRegisterUser } from '../states/users/action';
import { setSuccessStatusActionCreator } from '../states/status/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { successStatus = false } = useSelector((states) => states);

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
  };

  useEffect(() => {
    if (successStatus) {
      toast.success('Berhasil!, silahkan login', {
        theme: 'colored',
        icon: '🚀',
      });
      navigate('/login');
      dispatch(setSuccessStatusActionCreator(false));
    }
  }, [dispatch, navigate, successStatus]);

  return (
    <section className="register-page">
      <header className="register-page__hero">
        <img src={ChatImg} alt="chat" className="register-page__img" />
      </header>
      <article className="register-page__main">
        <h2>Daftar akun</h2>
        <RegisterInput register={onRegister} />

        <p>
          Sudah punya akun? <Link to="/login">Login</Link>
        </p>
      </article>
    </section>
  );
}

export default RegisterPage;
