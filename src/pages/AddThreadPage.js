/** @format */

import React from 'react';
import Navigation from '../components/Navigation';
import ThreadInput from '../components/ThreadInput';

function AddThreadPage() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <div className="app-container">
        <section className="add-page">
          <ThreadInput />
        </section>
      </div>
    </div>
  );
}

export default AddThreadPage;
