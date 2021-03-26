//
// Copyright 2021 BRAINFRAME.com
//

// https://storybook.js.org/docs/react/get-started/whats-a-story
module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-material-ui'
  ]
};
