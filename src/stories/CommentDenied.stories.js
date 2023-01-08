import React from 'react';
import CommentDenied from '../components/CommentDenied';

const stories = {
  title: 'Comment Denied',
  component: CommentDenied,
};

export default stories;

function TemplateStory(args) {
  return <CommentDenied {...args} />;
}

const softPurpleBackground = TemplateStory.bind({});
softPurpleBackground.args = {
  type: 'softPurple',
};

const successBackground = TemplateStory.bind({});
successBackground.args = {
  type: 'success',
};

const errorBackground = TemplateStory.bind({});
errorBackground.args = {
  type: 'error',
};

const warningBackground = TemplateStory.bind({});
warningBackground.args = {
  type: 'warning',
};

const infoBackground = TemplateStory.bind({});
infoBackground.args = {
  type: 'info',
};

export {
  softPurpleBackground,
  successBackground,
  errorBackground,
  warningBackground,
  infoBackground,
};
