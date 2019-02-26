const d3 = require('d3');

const { Preconditions } = require('@nshmp/nshmp-web-utils');

/**
 * @fileoverview D3 Utilities
 * 
 * @class D3Utils
 * @author Brandon Clayton
 */
class D3Utils {

  /** @private */
  constructor() {}

  /**
   * Increase/decrease the line width, marker size, and marker edge width
   *    of all lines and symbols.
   *    
   * @param {D3LineSeriesData} series The data series
   * @param {NodeList} lineEls The SVG elements of the lines
   * @param {NodeList} symbolEls The SVG elements of the symbols
   * @param {Boolean} isActive Whether the line/symbols have been selected
   *    or deselected
   */
  static linePlotSelection(series, lineEls, symbolEls, isActive) {
    const D3LineSeriesData = require('../data/D3LineSeriesData');
    Preconditions.checkArgumentInstanceOf(series, D3LineSeriesData);
    Preconditions.checkArgumentInstanceOf(lineEls, NodeList);
    Preconditions.checkStateInstanceOf(symbolEls, NodeList);
    Preconditions.checkArgumentBoolean(isActive);

    let options = series.lineOptions;

    let lineWidth = isActive ?  
        options.lineWidth * options.selectionMultiplier :
        options.lineWidth;

    let symbolSize = isActive ?
        options.d3SymbolSize * options.selectionMultiplier :
        options.d3SymbolSize;

    let edgeWidth = isActive ? 
        options.markerEdgeWidth * options.selectionMultiplier :
        options.markerEdgeWidth;

    d3.selectAll(lineEls)
        .attr('stroke-width', lineWidth);

    d3.selectAll(symbolEls)
        .attr('d', series.d3Symbol.size(symbolSize)()) 
        .attr('stroke-width', edgeWidth);
  }

}

module.exports = D3Utils;
