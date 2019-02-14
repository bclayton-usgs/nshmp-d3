'use strict';

const config = require('./config');

const EXPORTS = [
  'd3/D3LinePlot',
  'd3/D3SaveFigure',
  'd3/D3SaveLineData',
  'd3/D3Tooltip',
  'd3/D3Utils',
  'd3/axes/D3LineAxes',
  'd3/data/D3LineData',
  'd3/data/D3LineSeriesData',
  'd3/data/D3XYPair',
  'd3/legend/D3LineLegend',
  'd3/options/D3BaseSubViewOptions',
  'd3/options/D3BaseViewOptions',
  'd3/options/D3LineLegendOPtions',
  'd3/options/D3LineOPtions',
  'd3/options/D3LineSubViewOptions',
  'd3/options/D3LineViewOptions',
  'd3/options/D3SaveFigureOptions',
  'd3/options/D3TextOptions',
  'd3/options/D3TooltipOptions',
  'd3/view/D3BaseSubView',
  'd3/view/D3BaseView',
  'd3/view/D3LineSubView',
  'd3/view/D3LineView'
].map((path) => `./${config.src}/${path}:${path}`).concat([
  'd3',
  'bootstrap',
  'jquery'
]);

const browserify = {
  options: {
    browserifyOptions: {
      paths: [ `./${config.src}` ]
    }
  },
  source: {
    src: [],
    dest: `${config.build}/${config.src}/nshmp-d3.js`,
    options: {
      alias: EXPORTS
    }
  }
};

module.exports = browserify;
