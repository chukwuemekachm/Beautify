const path = require("path");

/**
 * @description Extend storybook webpack config
 */
module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, "../src"),
    loader: require.resolve("awesome-typescript-loader")
  });
  defaultConfig.resolve.extensions.push(".ts", ".tsx");

  return defaultConfig;
};
