
/* Bootstrap setup */
const $ = require('jquery');
window.jQuery = $;
require('bootstrap');

/* Main exports */
const D3LinePlot = require('./lib/plot/D3LinePlot');
const D3SaveFigure = require('./lib/save/D3SaveFigure');
const D3SaveLineData = require('./lib/save/D3SaveLineData');
const D3Tooltip = require('./lib/util/D3Tooltip');
const D3Utils = require('./lib/util/D3Utils');

/* Axes exports */
const D3LineAxes = require('./lib/axes/D3LineAxes');

/* Data exports */
const { D3LineData } = require('./lib/data/D3LineData');
const D3LineSeriesData = require('./lib/data/D3LineSeriesData');
const D3XYPair = require('./lib/data/D3XYPair');

/* Legend exports */
const D3LineLegend = require('./lib/legend/D3LineLegend');

/* Option exports */
const { D3BaseSubViewOptions } = require('./lib/options/D3BaseSubViewOptions');
const { D3BaseViewOptions } = require('./lib/options/D3BaseViewOptions');
const { D3LineLegendOptions } = require('./lib/options/D3LineLegendOptions');
const { D3LineOptions } = require('./lib/options/D3LineOptions');
const { D3LineSubViewOptions } = require('./lib/options/D3LineSubViewOptions');
const { D3LineViewOptions } = require('./lib/options/D3LineViewOptions');
const { D3SaveFigureOptions } = require('./lib/options/D3SaveFigureOptions');
const { D3TextOptions } = require('./lib/options/D3TextOptions');
const { D3TooltipOptions } = require('./lib/options/D3TooltipOptions');

/* View export  */
const {
    D3BaseSubView,
    D3BaseSubViewSVGElements } = require('./lib/view/D3BaseSubView');
const {
    D3BaseView,
    D3BaseViewFooterElements,
    D3BaseViewHeaderElements } = require('./lib/view/D3BaseView');
const {
    D3LineSubView,
    D3LineSubViewSVGElements } = require('./lib/view/D3LineSubView');
const {
  D3LineView,
  D3LineViewFooterElements } = require('./lib/view/D3LineView');

module.exports = {
  /* Main exports */
  D3LinePlot,
  D3SaveFigure,
  D3SaveLineData,
  D3Tooltip,
  D3Utils,

  /* Axes exports */
  D3LineAxes,

  /* Data exports */
  D3LineData,
  D3LineSeriesData,
  D3XYPair,

  /* Legend exports */
  D3LineLegend,

  /* Options exports */
  D3BaseSubViewOptions,
  D3BaseViewOptions,
  D3LineLegendOptions,
  D3LineOptions,
  D3LineSubViewOptions,
  D3LineViewOptions,
  D3SaveFigureOptions,
  D3TextOptions,
  D3TooltipOptions,

  /* View exports */
  D3BaseSubView,
  D3BaseSubViewSVGElements,
  D3BaseView,
  D3BaseViewFooterElements,
  D3BaseViewHeaderElements,
  D3LineSubView,
  D3LineSubViewSVGElements,
  D3LineView,
  D3LineViewFooterElements
};
