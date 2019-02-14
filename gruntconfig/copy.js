'use strict';

const config = require('./config');

const copy = {
  dist: {
    src: './src/d3/D3View.css', 
    dest: `${config.dist}/D3View.css`
  },
  dev: {
    src: './src/d3/D3View.css', 
    dest: `${config.build}/${config.src}/D3View.css`
  }
}

module.exports = copy;
