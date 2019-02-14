'use strict';

const config = require('./config');

const watch = {
  scripts: {
    files: [
      `${config.src}/**/*.js`,
      `${config.src}/**/*.css`,
      `${config.example}/**/*.js`,
      `${config.example}/**/*.html`
    ],
    tasks: ['browserify']
  },
  gruntfile: {
    files: [
      'Gruntfile.js',
      'gruntconfig/**/*.js',
    ]
  },
  browserify: {
    files: [
      'gruntconfig/browserify.js'
    ],
    tasks: ['browserify']
  }
};

module.exports = watch;
