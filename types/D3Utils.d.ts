/* D3Utils type definitions */

import { D3LineSeriesData } from './data/D3LineSeriesData';

/**
 * D3 Utilities
 * 
 * @class D3Utils
 * @author Brandon Clayton
 */
export class D3Utils {

  private constructor(); 

  /**
   * Check an array to see if if each value is a number or null.
   * 
   * @param values Values to check
   */
  static checkArrayIsNumberOrNull(values: number[] | null[]): void;

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
