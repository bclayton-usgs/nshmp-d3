/* D3Utils type definitions */

import { D3LineSeriesData } from '../../lib'; 

/**
 * D3 Utilities
 * 
 * @class D3Utils
 * @author Brandon Clayton
 */
export class D3Utils {

  private constructor(); 

  /**
   * Increase/decrease the line width, marker size, and marker edge width
   *    of all lines and symbols.
   *    
   * @param series The data series
   * @param lineEls The SVG elements of the lines
   * @param symbolEls The SVG elements of the symbols
   * @param isActive Whether the line/symbols have been selected or deselected
   */
  static linePlotSelection(
      series: D3LineSeriesData,
      lineEls: NodeList,
      symbolEls: NodeList,
      isActive: boolean): void;

}
