/* D3LinePlot type definitions */

import {
  D3LineAxes,
  D3LineData,
  D3LineLegend,
  D3LineOptions,
  D3LineSubView,
  D3LineView,
  D3TextOptions,
  D3Tooltip } from '../../lib';

/**
 * Plot D3LineData
 * 
 * @class D3LinePlot
 * @author Brandon Clayton
 */
export class D3LinePlot {

  /**
   * New D3LinePlot instance.
   * 
   * @param view The line view 
   */
  constructor(view: D3LineView);

  view: D3LineView;

  axes: D3LineAxes;
  
  upperLineData: D3LineData;
  
  lowerLineData: D3LineData;
  
  tooltip: D3Tooltip;
  
  legend: D3LineLegend;

  /**
   * Select lines on multiple sub views that have the same id. 
   * 
   * @param id The id of the lines to select
   * @param linePlots The line plots
   * @param lineDatas The line data
   */
  static selectLineOnSubViews(id: string, linePlots: D3LinePlot[], lineDatas: D3LineData[]): void;

  /**
   * Sync selections between multiple sub views.
   *  
   * @param  linePlots The line plots
   * @param lineDatas The line data
   */
  static syncSubViews(linePlots: D3LinePlot[], lineDatas: D3LineData[]): void;

  /**
   * Add text to a sub view's plot.
   *  
   * @param subView The sub view to add text
   * @param x The X coordinate of text
   * @param y The Y coordinate of text
   * @param text The text
   * @param textOptions Optional text options
   * @returns The text element
   */
  addText(
      subView: D3LineSubView,
      x: number,
      y: number,
      text: string, 
      textOptions?: D3TextOptions): SVGElement;

  /**
   * Clear all plots off a D3LineSubView.
   * 
   * @param subView
   */
  clear(subView: D3LineSubView): void;

  /**
   * Clear all plots off the sub views
   */
  clearAll(): void;

  /**
   * Get the current X domain of the plot.
   * 
   * @param subView The sub view to get domain
   * @returns The X axis domain: [ xMin, xMax ]
   */
  getXDomain(subView: D3LineSubView): number[];

  /**
   * Get the current Y domain of the plot.
   * 
   * @param subView The sub view to get the domain
   * @returns The Y axis domain: [ yMin, yMax ]
   */
  getYDomain(subView: D3LineSubView): number[];

  /**
   * Make a vertical line draggable.
   *  
   * @param subView The sub view were the line is to drag
   * @param refLineEl The reference line element
   * @param xLimit The limits that the line can be dragged
   * @param callback The funciton to call when the line is dragged.
   *    The arguments passed to the callback function are 
   *    (Number, D3LineSeriesData, SVGElement) where:
   *        - Number is the current X value
   *        - D3LineSeriesData is updated line series data
   *        - SVGElement is element being dragged
   */
  makeDraggableInX(
      subView: D3LineSubView,
      refLineEl: SVGElement,
      xLimit: number[],
      callback?: Function): void;

  /**
   * Make a horizontal line draggable.
   *  
   * @param subView The sub view were the line is to drag
   * @param refLineEl The reference line element
   * @param yLimit The limits that the line can be dragged
   * @param callback The funciton to call when the line is dragged.
   *    The arguments passed to the callback function are 
   *    (Number, D3LineSeriesData, SVGElement) where:
   *        - Number is the current Y value
   *        - D3LineSeriesData is updated line series data
   *        - SVGElement is element being dragged
   */
  makeDraggableInY(
      subView: D3LineSubView,
      refLineEl: SVGElement,
      yLimit: number[],
      callback?: Function): void;

  /**
   * Move a text element to a new location.
   *  
   * @param subView The sub view of the text
   * @param x The new X coordinate
   * @param y The new Y coordinate
   * @param textEl The text element
   */
  moveText(subView: D3LineSubView, x: number, y: number, textEl: SVGElement): void;

  /**
   * Fire a custom function when a line or symbol is selected.
   * Arguments passed to the callback function:
   *    - D3LineSeriesData: The series data from the plot selection
   * 
   * @param lineData The line data
   * @param callback Function to call when plot is selected
   */
  onPlotSelection(lineData: D3LineData, callback: Function): void;

  /**
   * Creates a 2-D line plot from D3LineData.
   *  
   * @param lineData The line data to plot
   */
  plot(lineData: D3LineData): void;

  /**
   * Plot a reference line at zero, y=0.
   * 
   * @param subView The sub view to add the line to
   */
  plotZeroRefLine(subView: D3LineSubView): void;

  /**
   * Plot a horizontal reference line, y=value.
   * 
   * @param subView The sub view to put reference line
   * @param y The Y value of reference line
   * @param lineOptions The line options
   * @returns The reference line element
   */
  plotHorizontalRefLine(subView: D3LineSubView, y: number, lineOptions?: D3LineOptions): SVGElement;

  /**
   * Plot a vertical reference line, x=value.
   * 
   * @param subView The sub view to put reference line
   * @param x The X value of reference line
   * @param lineOptions The line options
   * @returns The reference line element
   */
  plotVerticalRefLine(subView: D3LineSubView, x: number, lineOptions?: D3LineOptions): SVGElement;

  /**
   * Get an SVG element in a sub view's plot based on the data's id.
   * 
   * @param subView The sub view the data element is in
   * @param id The id of the data element
   * @returns The SVG element with that id
   */
  querySelector(subView: D3LineSubView, id: string): SVGElement;

  /**
   * Get SVG elements in a sub view's plot based on the data's id. 
   * 
   * @param subView The sub view the data element is in
   * @param id The id of the data element
   * @returns Node list of SVG elements with that id
   */
  querySelectorAll(subView: D3LineSubView, id: string): NodeList;

  /**
   * Select lines of multiple line data given an id.
   *  
   * @param id of line to select
   * @param lineDatas The line data
   */
  selectLine(id: string, ...lineDatas: D3LineData[]): void;

  /**
   * Sync the plot selections between the upper and lower sub views.
   */
  syncSubViews(): void;

  /**
   * Update the text on a text element.
   * 
   * @param textEl The text element
   * @param text The new text
   */
  updateText(textEl: SVGElement, text: string): void;

  /**
   * Update the text on a text element.
   * 
   * @param textEl The text element
   * @param textOptions Optional text options
   */
  updateTextOptions(textEl: SVGElement, textOptions?: D3TextOptions): void;

}
