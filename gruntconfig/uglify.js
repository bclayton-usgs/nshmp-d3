'use strict';

const config = require('./config');

const uglify = {
  dist: {
    src: `${config.build}/${config.src}/nshmp-d3.js`,
    dest: `${config.dist}/nshmp-d3.min.js`
  }
};

module.exports = uglify;
