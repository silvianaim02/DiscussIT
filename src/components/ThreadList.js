import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';

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

const threadsShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadsShape)).isRequired,
};

export default ThreadList;
