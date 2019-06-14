/* D3LineAxes type definitions */

import * as d3 from 'd3';

import {
  D3LineData,
  D3LineSubView,
  D3LineView,
  D3XYPair } from '../../lib';

/**
 * Add X and Y axes, axes labels, and gridlines to a D3LinePlot.
 * 
 * @class D3LineAxes
 * @author Brandon Clayton
 */
export class D3LineAxes {

  /**
   * New instance of D3LineAxes
   *  
   * @param view The line view
   */
  constructor(view: D3LineView);

  /** The view */
  view: D3LineView;

  /**
   * Add a log or linear X axis to a D3LineSubView with 
   * a X label and grid lines.
   * 
   * @param lineData The line data 
   * @param scale The scale: 'log' || 'linear'
   */
  createXAxis(lineData: D3LineData, scale: String): void;

  /**
   * Add log or linear X grid lines to a D3LineSubView.
   * 
   * @param lineData The line data
   * @param scale The scale: 'log' || 'linear' 
   */
  createXGridLines(lineData: D3LineData, scale: String): void; 

  /**
   * Add a log or linear Y axis to a D3LineSubView with 
   *    a Y label and grid lines.
   * 
   * @param lineData The line data 
   * @param scale The scale: 'log' || 'linear'
   */
  createYAxis(lineData: D3LineData, scale: String): void;

  /**
   * Add log or linear Y grid lines to a D3LineSubView.
   * 
   * @param lineData The line data
   * @param scale The scale: 'log' || 'linear' 
   */
  createYGridLines(lineData: D3LineData, scale: String): void;

  /**
   * Returns a D3 line generator.
   *  
   * @param lineData The D3LineData 
   * @param xScale The X axis scale
   * @param yScale The Y axis scale
   * @returns The line generator
   */
  line(lineData: D3LineData, xScale: String, yScale: String): d3.Line<[number, number]>; 

  /**
   * Remove the X axis grid lines.
   * 
   * @param subView The sub view to remove them from
   */
  removeXGridLines(subView: D3LineSubView): void;

  /**
   * Remove the Y axis grid lines.
   * 
   * @param subView The sub view to remove them from
   */
  removeYGridLines(subView: D3LineSubView): void; 

  /**
   * Get the plotting X coordinate of a data point assosciated with a
   *    D3LineData
   * 
   * @param lineData The D3LineData for the X coordinate
   * @param scale The X axis scale
   * @param xyPair The data point to plot
   * @returns The plotting X coordinate of the X data point
   */
  x(lineData: D3LineData, scale: String, xyPair: D3XYPair): number; 

  /**
   * Get the plotting Y coordinate of a data point assosciated with a
   *    D3LineData
   * 
   * @param lineData The D3LineData for the Y coordinate
   * @param scale The Y axis scale
   * @param xyPair The data point to plot
   * @returns The plotting Y coordinate of the Y data point
   */
  y(lineData: D3LineData, scale: String, xyPair: D3XYPair): number; 

}
