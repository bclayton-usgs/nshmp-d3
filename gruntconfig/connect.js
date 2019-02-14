'use strict';

const config = require('./config');

const connect = {
  dev: {
    options: {
      base: [
        `${config.build}/${config.src}`,
        config.example
      ],
      keepalive: false,
      port: config.port,
      open: `http://localhost:${config.port}/d3-basic-line-plot.html`
    }
  },
  dist: {
    options: {
      base: [
        config.example,
        config.dist
      ],
      keepalive: true,
      port: config.port
    }
  }
};

module.exports = connect;
