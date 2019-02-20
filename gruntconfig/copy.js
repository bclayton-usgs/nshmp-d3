'use strict';

const config = require('./config');

const copy = {
  dist: {
    src: `./${config.src}/D3View.css`, 
    dest: `${config.dist}/D3View.css`
  },
  dev: {
    src: `./${config.src}/D3View.css`, 
    dest: `${config.build}/${config.src}/D3View.css`
  }
}

module.exports = copy;
