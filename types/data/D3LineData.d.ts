/* D3LineData type definitions */

import { D3LineOptions } from '../options/D3LineOptions';
import { D3LineSeriesData } from '../data/D3LineSeriesData';
import { D3LineSubView } from '../../lib/view';
import { D3XYPair } from '../data/D3XYPair';

/**
 * Create the data series for line plots.
 * 
 * Use D3LineData.Builder to build a D3LineData instance.
 * See D3LineData.builder() 
 * See D3LineDataBuilder 
 * 
 * @class D3LineData
 * @author Brandon Clayton
 */
export class D3LineData {

  private constructor();

  /** 
   * The color scheme for plotting.
   * The color scheme will rotate through the colors once the
   *    length of data is greater than color scheme array.
   * Default: d3.schemeCategory10
   */
  colorScheme: string[];

  /** The series XY values and line options. */
  series: D3LineSeriesData[];

  /** Which line sub view to plot. */
  subView: D3LineSubView;
  
  /**
   * The lower and upper limit of the X axis.
   * Default: 'auto'
   */
  xLimit: number[];
  
  /**
   * The lower and upper limit of the Y axis.
   * Default: 'auto'
   */
  yLimit: number[];

  /**
   * Return a new D3LineDataBuilder.
   * See D3LineDataBuilder 
   * 
   * @returns new D3LineDataBuilder
   */
  static builder(): D3LineDataBuilder; 

  /**
   * Create a new D3LineData from multiple D3LineData.
   * 
   * @param lineData Line data to merge
   * @returns new line data
   */
  static of(...lineData: D3LineData[]): D3LineData;

  /**
   * Combine two D3LineData using the D3LineData.series.lineOptions.id 
   *    field to find matching D3LineSeries.
   *  
   * @param lineData The line data to combine
   * @returns New line data
   */
  concat(lineData: D3LineData): D3LineData;

  /**
   * Get all XY values.
   * 
   * @returns Array of XY values
   */
  getData(): D3XYPair[][]; 

  /**
   * Get all the line options associated with the XY values.
   * 
   * @returns Array of line options.
   */
  getLineOptions(): D3LineOptions[];

  /**
   * Get the X limits for the X axis, either from the set xLimit in
   *    the builder or from the min and max values in the data.
   * 
   * @returns The [ min, max ] X values
   */
  getXLimit(): number[];

  /**
   * Get the Y limits for the Y axis, either from the set yLimit in
   *    the builder or from the min and max values in the data.
   * 
   * @returns The [ min, max ] Y values
   */
  getYLimit(): number[];

  /**
   * Convert a D3LineSeriesData into an
   *    Array<D3LineSeriesData> where each D3LineSeriesData is a single
   *    XY data point.
   * 
   * @param series The series to expand 
   * @returns The new array of D3LineSeriesData
   */
  toMarkerSeries(series: D3LineSeriesData): D3LineSeriesData[];

  /**
   * Return an Array<D3LineSeriesData> with only
   *    D3LineOptions.showLegend as true.
   */
  toLegendSeries(): D3LineSeriesData[];

}


/**
 * Builder for D3LineData
 * 
 * Use D3LineData.builder() for new instance of D3LineDataBuilder
 * 
 * @class D3LineDataBuilder
 * @author Brandon Clayton
 */
export class D3LineDataBuilder {
  
  /**
   * Return a new D3LineData instance.
   * 
   * @return new D3LineData
   */
  build(): D3LineData;

  /**
   * Set the color scheme.
   * The color scheme will rotate through the colors once the
   *    length of data is greater than color scheme array.
   * 
   * @param {Array<String>} scheme Array of colors 
   */
  colorScheme(scheme: string[]): D3LineDataBuilder;

  /**
   * Set x-values, y-values, and line options. 
   * 
   * @param xValues The X values of the data
   * @param yValues The Y values of the data
   * @param [lineOptions = D3LineOptions.withDefaults()]
   *    The line options for the data
   * @param xStrings Custom X labels for X values
   * @param yStrings Custom Y labels for Y values
   */
  data(
      xValues: number[],
      yValues: number[],
      lineOptions?: D3LineOptions,
      xStrings?: string[],
      yStrings?: string[]): D3LineDataBuilder;

  /**
   * Create a D3LineDataBuilder from multiple D3LineData.
   * 
   * @param lineData Line data to merge 
   */
  of(...lineData: D3LineData[]): D3LineDataBuilder;

  /**
   * Remove all values under a cut off Y value.
   * 
   * @param yMinCutOff The cut off value
   */
  removeSmallValues(yMinCutOff: number): D3LineDataBuilder;

  /**
   * Set the line sub view for which to plot the data.
   * 
   * @param view The sub view to plot the data 
   */
  subView(view: D3LineSubView): D3LineDataBuilder;

  /**
   * Set the X limits for the X axis.
   * Default: 'auto'
   * 
   * @param lim The X axis limits: [ xMin, xMax ]
   */
  xLimit(lim: number[]): D3LineDataBuilder;

  /**
   * Set the Y limits for the Y axis.
   * Default: 'auto'
   * 
   * @param lim The Y axis limits: [ yMin, yMax ]
   */
  yLimit(lim: number[]): D3LineDataBuilder;

}
