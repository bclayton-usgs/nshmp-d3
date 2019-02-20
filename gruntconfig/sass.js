
const config = require('./config');

const sass = {
  dev: {
    files: {
      '.build/lib/nshmp-d3.css': `${config.src}/nshmp-d3.scss`
    }
  },
  dist: {
    options: {
      style: 'compressed'
    },
    files: {
      'dist/css/nshmp-d3.min.css': `${config.src}/nshmp-d3.scss`
    }
  }
};

module.exports = sass;
