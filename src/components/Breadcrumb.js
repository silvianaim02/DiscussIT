/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

function BreadCrumb() {
  return (
    <ul className="breadcrumb">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="#">Pictures</Link>
      </li>
      <li>
        <Link to="#">Summer 15</Link>
      </li>
      <li>Italy</li>
    </ul>
  );
}

export default BreadCrumb;
