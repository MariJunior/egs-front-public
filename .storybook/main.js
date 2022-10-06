const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-scss'],
  webpackFinal: async (config) => {
    const rules = config.module.rules;
    const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;
    rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });
    // hack for backgroung-images
    config.resolve.alias['/icons/dots.svg'] = path.resolve(__dirname, '../public/icons/dots.svg');
    config.resolve.alias['/icons/PointedMarker.svg'] = path.resolve(__dirname, '../public/icons/PointedMarker.svg');
    config.resolve.alias['/storybook/careerHeaderBg.jpeg'] = path.resolve(
      __dirname,
      '../public/storybook/careerHeaderBg.jpeg',
    );
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, 'tsconfig.json'),
      }),
    ];
    return config;
  },
};
