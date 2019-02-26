
const config = require('./config');

const sass = {
  css: {
    files: {
      'dist/css/nshmp-d3.css': 'scss/nshmp-d3.scss'
    }
  },
  cssMin: {
    options: {
      style: 'compressed'
    },
    files: {
      'dist/css/nshmp-d3.min.css': 'scss/nshmp-d3.scss'
    }
  }
};

module.exports = sass;
