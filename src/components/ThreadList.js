/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import ThreadItem from './ThreadItem';
import { threads } from '../utils/dummy';

function ThreadList() {
  // console.log(threads);
  return (
    <div>
      <div className="thread-list">
        {threads.map((thread) => (
          <Link to={`/threads/${thread.id}`} key={thread.id}>
            <ThreadItem key={thread.id} {...thread} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ThreadList;
