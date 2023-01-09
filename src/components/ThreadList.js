import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemPropTypes } from './ThreadItem';

function ThreadList({ threads }) {
  if (!threads) {
    return null;
  }
  return (
    <div>
      <div className="thread-list">
        {threads.map((thread) => (
          <ThreadItem key={thread.id} {...thread} />
        ))}
      </div>
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemPropTypes)).isRequired,
};

export default ThreadList;
