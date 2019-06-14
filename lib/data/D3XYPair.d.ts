/* D3XYPair type definitions */

/**
 * Container class to hold a X and Y pair 
 * 
 * @class D3LineSeriesData
 * @author Brandon Clayton
 */
export class D3XYPair {
  
  /**
   * @param {Number} x The X value 
   * @param {Number} y The Y value
   * @param {String} xString Optional string representation
   * @param {String} yString Optional string representation
   */
  constructor(x: number, y: number, xString?: String, yString?: string);

  /** The X value */
  x: number;
  
  /** The Y value */
  y: number;

  /** The X value string representation */
  xString: String;

  /** The Y value string representation */
  yString: String;

}
