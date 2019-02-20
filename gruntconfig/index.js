'use strict';

const grunt = require('grunt');

const config = {
  pkg: grunt.file.readJSON('package.json'),
  browserify: require('./browserify'),
  clean: require('./clean'),
  connect: require('./connect'),
  copy: require('./copy'),
  sass: require('./sass'),
  uglify: require('./uglify'),
  watch: require('./watch'),

  tasks: [
    'grunt-browserify',
    'grunt-contrib-clean',
    'grunt-contrib-connect',
    'grunt-contrib-copy',
    'grunt-contrib-sass',
    'grunt-contrib-uglify-es',
    'grunt-contrib-watch',
  ]
};

module.exports = config;
