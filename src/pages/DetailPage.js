/** @format */

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation';
import Navigation from '../components/Navigation';
import ThreadDetail from '../components/ThreadDetail';
import { getIndexItemById } from '../utils';
import { threads } from '../utils/dummy';

function DetailPage() {
  const { id } = useParams();
  // const { threadDetail = 'ada', authUser = null, onSignOut } = {};
  const threadDetail = getIndexItemById(id, threads)[0];
  console.log(threadDetail);

  if (!threadDetail) {
    return (
      <>
        <header>
          <Navigation />
        </header>
        <div className="app-container">
          <section className="detail-page">
            <p>null talk detail</p>
          </section>
        </div>
      </>
    );
  }

  return (
    <div>
      <header>
        <Navigation />
      </header>
      <div className="app-container">
        <section className="detail-page">
          <ThreadDetail {...threadDetail} />
        </section>
      </div>
      <footer>
        <BottomNavigation />
      </footer>
    </div>
  );
}

export default DetailPage;
