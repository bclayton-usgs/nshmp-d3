/* D3LineSeriesData type definitions */

import {
  D3LineOptions,
  D3XYPair } from '../../lib';

/**
 * Container class to hold XY values and assoiciated D3LineOptions
 *
 * @class D3LineSeriesData
 * @author Brandon Clayton
 */
export class D3LineSeriesData {

  /**
   * @param {Array<Number>} xValues The X values
   * @param {Array<Number>} yValues The Y values
   * @param {D3LineOptions} options The line options
   * @param xStrings Custom string labels for X values
   * @param yStrings Custom string labels for Y labels
   */
  constructor(
      xValues: number[],
      yValues: number[],
      options: D3LineOptions,
      xStrings?: string[],
      yStrings?: string[]);

  /** The X values */
  xValues: number[];

  /** The Y values */
  yValues: number[];

  /** Custom X value strings to be shown when viewing the data value */
  xStrings: string[];

  /** Custom Y value strings to be shown when viewing the data value */
  yStrings: string[];

  /** The D3LineOptions associated with XY values */
  lineOptions: D3LineOptions;

  /** The array of XY pair */
  data: D3XYPair[];

  /** The D3 symbol generator */
  d3Symbol: d3.Symbol<any, any>;

  /**
   * Given two D3LineSeriesData, find the common X values and return
   *    an array of XY pairs that were in common.
   *
   * @param seriesA First series
   * @param seriesB Second series
   * @return The array of common XY pairs
   */
  static intersectionX(
      seriesA: D3LineSeriesData,
      seriesB: D3LineSeriesData): D3XYPair[]

  /**
   * Given two D3LineSeriesData, find the common Y values and return
   *    an array of XY pairs that were in common.
   *
   * @param seriesA First series
   * @param seriesB Second series
   * @return The array of common XY pairs
   */
  static intersectionY(
      seriesA: D3LineSeriesData,
      seriesB: D3LineSeriesData): D3XYPair[]

  /**
   * Check to see if all X values are null
   */
  checkXValuesNull(): boolean;

  /**
   * Check to see if all Y values are null
   */
  checkYValuesNull(): boolean;

  /**
   * Remove all values under a cut off Y value.
   *
   * @param {Number} yMinCuttOff The cut off value
   */
  removeSmallValues(yMinCuttOff: number): void;

}
