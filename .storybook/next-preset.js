const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.plugins.push(new TsconfigPathsPlugin({})); // this is the plugin
  defaultConfig.resolve.extensions.push('.ts', '.tsx');
  return defaultConfig;
};
