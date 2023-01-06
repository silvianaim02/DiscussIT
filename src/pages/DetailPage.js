import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import BottomNavigation from '../components/BottomNavigation';
import Navigation from '../components/Navigation';
import ThreadDetail from '../components/ThreadDetail';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

function DetailPage({ signOut }) {
  const { id } = useParams();

  const { threadDetail = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  return (
    <div>
      <header>
        <Navigation authUser={authUser} signOut={signOut} />
      </header>
      <div className="app-container">
        <section className="detail-page">
          <button
            type="submit"
            onClick={() => navigate(-1)}
            className="back-button"
          >
            <BiArrowBack />
          </button>
          {threadDetail ? <ThreadDetail {...threadDetail} /> : null}
        </section>
      </div>
      <footer>
        <BottomNavigation />
      </footer>
    </div>
  );
}

DetailPage.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default DetailPage;
