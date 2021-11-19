const { EleventyRenderPlugin } = require("@11ty/eleventy");

const dir = {
  input: 'src',
  includes: '_includes',
  output: 'dist',
};

module.exports = function(config) {
  config.addPlugin(EleventyRenderPlugin);

  return {
    dir
  };
};
