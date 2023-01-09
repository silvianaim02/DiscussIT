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
  columnOne: 'Nama Pengguna',
  columnTwo: 'Skor',
  type: 'softPurple',
};

const successTitleColBg = TemplateStory.bind({});
successTitleColBg.args = {
  leaderboards: leaderboardsData,
  columnOne: 'Nama Pengguna',
  columnTwo: 'Skor',
  type: 'success',
};

const errorTitleColBg = TemplateStory.bind({});
errorTitleColBg.args = {
  leaderboards: leaderboardsData,
  columnOne: 'Nama Pengguna',
  columnTwo: 'Skor',
  type: 'error',
};

const warningTitleColBg = TemplateStory.bind({});
warningTitleColBg.args = {
  leaderboards: leaderboardsData,
  columnOne: 'Nama Pengguna',
  columnTwo: 'Skor',
  type: 'warning',
};

const infoTitleColBg = TemplateStory.bind({});
infoTitleColBg.args = {
  leaderboards: leaderboardsData,
  columnOne: 'Nama Pengguna',
  columnTwo: 'Skor',
  type: 'info',
};

export {
  softPurpleTitleColBg,
  successTitleColBg,
  errorTitleColBg,
  warningTitleColBg,
  infoTitleColBg,
};
