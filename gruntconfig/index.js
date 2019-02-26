'use strict';

const grunt = require('grunt');

const config = {
  pkg: grunt.file.readJSON('package.json'),
  browserify: require('./browserify'),
  clean: require('./clean'),
  copy: require('./copy'),
  sass: require('./sass'),
  uglify: require('./uglify'),

  tasks: [
    'grunt-browserify',
    'grunt-contrib-clean',
    'grunt-contrib-copy',
    'grunt-contrib-sass',
    'grunt-contrib-uglify-es',
  ]
};

module.exports = config;
