'use strict';

module.exports = function (grunt) {

  const gruntConfig = require('./gruntconfig');

  gruntConfig.tasks.forEach(grunt.loadNpmTasks);

  grunt.initConfig(gruntConfig);

  /* Default tasks for to build library */
  grunt.registerTask('default', [
    'clean',
    'browserify',
    'sass:css',
    'sass:cssMin',
    'copy:dist',
    'uglify',
  ]);

};
