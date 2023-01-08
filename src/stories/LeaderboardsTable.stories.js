import React from 'react';
import LeaderboardsTable from '../components/LeaderboardsTable';

const stories = {
  title: 'Leaderboards Table',
  component: LeaderboardsTable,
};

export default stories;

function TemplateStory(args) {
  return <LeaderboardsTable {...args} />;
}

const leaderboardsData = [
  {
    user: {
      id: 'user-5PqX6Ldhnk_ifroq',
      name: 'Dimas Saputra',
      email: 'dimas@dicoding.com',
      avatar:
        'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
    },
    score: 55,
  },
  {
    user: {
      id: 'user-jC36E_dMNBlD885q',
      name: 'rizky cahya',
      email: 'rizkycahya@gmail.com',
      avatar: 'https://ui-avatars.com/api/?name=rizky cahya&background=random',
    },
    score: 40,
  },
  {
    user: {
      id: 'user-6oWew2w2Wx5xLUTU',
      name: 'Dicoding',
      email: 'admin@dicoding.com',
      avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random',
    },
    score: 15,
  },
];

const softPurpleTitleColBg = TemplateStory.bind({});
softPurpleTitleColBg.args = {
  leaderboards: leaderboardsData,
  //   title: 'Light',
  //   avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random',
  //   name: 'silvia',
  //   content: 'This is a isi comentar',
  //   colorUpVote: true,
  //   colorDownVote: false,
  //   allDownVotes: 4,
  //   createdAt: 'NOW',
  //   type: 'light',
};

export { softPurpleTitleColBg };
