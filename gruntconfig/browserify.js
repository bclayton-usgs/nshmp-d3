'use strict';

const config = require('./config');

const EXPORTS = [
  'plot/D3LinePlot',
  'save/D3SaveFigure',
  'save/D3SaveLineData',
  'util/D3Tooltip',
  'util/D3Utils',
  'axes/D3LineAxes',
  'data/D3LineData',
  'data/D3LineSeriesData',
  'data/D3XYPair',
  'legend/D3LineLegend',
  'options/D3BaseSubViewOptions',
  'options/D3BaseViewOptions',
  'options/D3LineLegendOPtions',
  'options/D3LineOPtions',
  'options/D3LineSubViewOptions',
  'options/D3LineViewOptions',
  'options/D3SaveFigureOptions',
  'options/D3TextOptions',
  'options/D3TooltipOptions',
  'view/D3BaseSubView',
  'view/D3BaseView',
  'view/D3LineSubView',
  'view/D3LineView'
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
    dest: `${config.dist}/nshmp-d3.js`,
    options: {
      alias: EXPORTS
    }
  }
};

module.exports = browserify;
