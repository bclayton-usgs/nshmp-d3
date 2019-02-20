'use strict';

const config = require('./config');

const copy = {
  dist: {
    files: [
      {
        src: `./${config.src}/nshmp-d3.css`, 
        dest: `${config.dist}/nshmp-d3.css`,
      }, {
        src: `${config.build}/${config.src}/nshmp-d3.js`,
        dest: `${config.dist}/nshmp-d3.js`
      }, {
        src: `./${config.src}/nshmp-d3.scss`,
        dest: `${config.dist}/scss/nshmp-d3.scss`
      }, {
        src: `${config.build}/${config.src}/nshmp-d3.css`,
        dest: `${config.dist}/css/nshmp-d3.css`
      }
    ]
  },
  dev: {
    src: `./${config.src}/nshmp-d3.css`, 
    dest: `${config.build}/${config.src}/nshmp-d3.css`
  }
}

module.exports = copy;
