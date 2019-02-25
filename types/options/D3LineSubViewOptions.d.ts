/* D3LineSubViewOptions type definitions */

import { D3LineLegendOptions } from './D3LineLegendOptions';
import { D3BaseSubViewOptions, D3BaseSubViewOptionsBuilder} from './D3BaseSubViewOptions';

/**
 * Create options for D3LineSubView.
 * 
 * Use D3LineSubViewOptions.lowerBuilder() or
 *    D3LineSubViewOptions.upperBuilder() to customize options 
 *    for lower and upper sub view or use 
 *    D3LineSubViewOptions.upperWithDefaults() or 
 *    D3LineSubViewOptions.lowerWithDefaults() for default options.
 * 
 * Note: The only difference between upperWithDefaults() and 
 *    lowerWithDefault() is the plot height. The lower view defaults with
 *    224 px for plot height while the upper is 504 px.
 * 
 * @class D3LineSubViewOptions
 * @extends D3BaseSubViewOptions
 * @author Brandon Clayton
 */
export class D3LineSubViewOptions extends D3BaseSubViewOptions {

  protected constructor();

  /**
   * The font weight for the X and Y axis labels.
   * Default: 500
   */
  axisLabelFontWeight: number;

  /**
   * The default X limit when the D3LineView is shown with no data. 
   * Default: [ 0.01, 10 ] 
   */
  defaultXLimit: number[];
  
  /**
   * The default X limit when the D3LineView is shown with no data. 
   * Default: [ 0.01, 1 ] 
   */
  defaultYLimit: number[];
  
  /**
   * Snap lines that are being dragged to the nearest specified value.
   * Default: 0.01
   */
  dragLineSnapTo: number;

  /** 
   * Color of axes grid lines.
   * Default: '#E0E0E0' 
   */
  gridLineColor: string;

  /**
   * Width of axes grid lines.
   * Default: 0.75 
   */
  gridLineWidth: number;
  
  /** 
   * Axes label font size in px. 
   * Default: 16
   */
  labelFontSize: number;
  
  /**
   * The legend options.
   * Default: D3LineLegendOptions.withDefaults()
   */
  legendOptions: D3LineLegendOptions;

  /**
   * A label to represent what the data represents.
   * Default: 'Line'
   */
  lineLabel: string;

  /**
   * Color of a reference line.
   * Default: 'gray'
   */
  referenceLineColor: string;

  /**
   * Line width of the reference line.
   * Default: 1.5
   */
  referenceLineWidth: number;

  /**
   * Whether to show the legend regardless of using the legend toggle.
   * Default: true
   */
  showLegend: boolean;

  /**
   * The font size of the exponents on the tick mark values in px. 
   * Only when in log space.
   * Default: 8
   */
  tickExponentFontSize: number;

  /**
   * The tick mark values font size in px.
   * Default: 12
   */
  tickFontSize: number;

  /**
   * The duration for any plot animations in milliseconds.
   * e.g. switching between log and linear scales.
   * Default: 500
   */
  translationDuration: number;

  /**
   * The X axis location: 'top' || 'bottom'
   * Default: 'bottom'
   */
  xAxisLocation: string;

  /**
   * Extend the domain to start and end on nice round numbers.
   * Default: true
   */
  xAxisNice: boolean;

  /**
   * The X axis scale: 'log' || 'linear'
   * Default: 'linear'
   */
  xAxisScale: string;

  /**
   * The number of digits after decimal place when 
   *    xValueToExponent is set to true.
   * Default: 4
   */
  xExponentFractionDigits: number;

  /**
   * The X axis label; can be an HTML string.
   * Default: 'X'
   */
  xLabel: string;

  /**
   * Padding around the X label in px.
   * Default: 8
   */
  xLabelPadding: number;

  /**
   * The number of tick marks for the X axis.
   * The specified count is only a hint; the scale may return more or 
   *    fewer values depending on the domain.
   * Default: 8
   */
  xTickMarks: number;

  /**
   * Whether to format the X value in exponential form when X value
   *    is shown on tooltip, in data view, and when saving data.
   * Default: false
   */
  xValueToExponent: boolean;
  
  /**
   * The Y axis location: 'left' || 'right'
   * Default: 'left'
   */
  yAxisLocation: string;

  /**
   * Extend the domain to start and end on nice round numbers.
   * Default: true
   */
  yAxisNice: boolean;

  /**
   * Whether to reverse the Y axis direction.
   * Default: false
   */
  yAxisReverse: boolean;

  /**
   * The Y axis scale: 'log' || 'linear'
   * Default: 'linear'
   */
  yAxisScale: string;

  /**
   * The number of digits after decimal place when 
   *    yValueToExponent is set to true.
   * Default: 4
   */
  yExponentFractionDigits: number;

  /**
   * The Y axis label; can be an HTML string.
   * Default: 'Y'
   */
  yLabel: string;
  
  /**
   * Padding around the Y label in px.
   * Default: 10
   */
  yLabelPadding: number;

  /**
   * The number of tick marks for the Y axis.
   * The specified count is only a hint; the scale may return more or 
   *    fewer values depending on the domain.
   * Default: 6
   */
  yTickMarks: number;

  /**
   * Whether to format the Y value in exponential form when Y value
   *    is shown on tooltip, in data view, and when saving data.
   * Default: false
   */
  yValueToExponent: boolean;

  /** 
   * Return new D3LineSubViewOptionsBuilder for lower sub view 
   */
  static lowerBuilder(): D3LineSubViewOptionsBuilder;

  /** 
   * Return new D3LineSubViewOptions for lower sub view 
   */
  static lowerWithDefaults(): D3LineSubViewOptions;

  /** 
   * Return new D3LineSubViewOptionsBuilder for upper sub view 
   */
  static upperBuilder(): D3LineSubViewOptionsBuilder;

  /** 
   * Return new D3LineSubViewOptions for upper sub view 
   */
  static upperWithDefaults(): D3LineSubViewOptions;

}

/**
 * Builder for D3LineSubViewOptions.
 * 
 * Use D3LineSubViewOptions.lowerBuilder() or
 *    D3LineSubViewOptions.upperBuilder() for new instance of builder.
 * 
 * @class D3LineSubViewOptionsBuilder
 * @extends D3BaseSubViewOptionsBuilder
 * @author Brandon Clayton
 */
export class D3LineSubViewOptionsBuilder extends D3BaseSubViewOptionsBuilder {

  protected constructor();

  /**
   * Return new D3LineSubViewOptions
   * @returns Sub view options
   */
  build(): D3LineSubViewOptions;

  /**
   * Set the font weight for the X and Y axis labels.
   * Default: 500
   * @param weight The font weight 
   */
  axisLabelFontWeight(weight: number): D3LineSubViewOptionsBuilder;

  /**
   * Set the default X limit when the D3LineView is shown with no data. 
   * Default: [ 0.01, 10 ] 
   * @param xLimit The [ min, max] for the X axis
   */
  defaultXLimit(xLimit: number[]): D3LineSubViewOptionsBuilder;

  /**
   * Set the default Y limit when the D3LineView is shown with no data. 
   * Default: [ 0.01, 1 ] 
   * @param yLimit The [ min, max ] for the Y axis
   */
  defaultYLimit(yLimit: number[]): D3LineSubViewOptionsBuilder;

  /**
   * Snap a line to the nearest value when dragging.
   * Default: 0.01
   * 
   * @param snapTo Snap to value
   */
  dragLineSnapTo(snapTo: number): D3LineSubViewOptionsBuilder;

  /**
   * Set the grid line color in HEX, rgb, or string name.
   * Default: 'E0E0E0'
   * @param color The grid line color
   */
  gridLineColor(color: string): D3LineSubViewOptionsBuilder;

  /**
   * Set the grid line width.
   * Default: 0.75
   * @param width The grid line width
   */
  gridLineWidth(width: number):D3LineSubViewOptionsBuilder;

  /**
   * Set the legend options.
   * Default: D3LineLegendOptions.withDefaults()
   * 
   * @param options The legend options 
   */
  legendOptions(options: D3LineLegendOptions): D3LineSubViewOptionsBuilder;

  /**
   * A label representing what the line data is. 
   * Default: ''
   *  
   * @param label The line label 
   */
  lineLabel(label: string): D3LineSubViewOptionsBuilder;

  /**
   * Set the reference line color in HEX, RGB, or string name.
   * Default: '#9E9E9E'
   * @param color The color
   */
  referenceLineColor(color: string): D3LineSubViewOptionsBuilder;
  
  /**
   * Set the reference line width. 
   * Default: 1.5
   * @param width The width
   */
  referenceLineWidth(width: number): D3LineSubViewOptionsBuilder;
 
  /**
   * Whether to show the legend regardless of using the legend toggle.
   * Default: true
   * 
   * @param show the legend 
   */
  showLegend(show: boolean): D3LineSubViewOptionsBuilder;

  /**
   * Set the font size of the exponents on the axes tick marks.
   * Only in log scale.
   * Default: 6
   * @param size The font size
   */
  tickExponentFontSize(size: number): D3LineSubViewOptionsBuilder;
  
  /**
   * Set the axes tick mark font size.
   * Default: 12  
   * @param size 
   */
  tickFontSize(size: number): D3LineSubViewOptionsBuilder;

  /**
   * Set the transition duration in milliseconds. Used when switching 
   *    between log and linear scale.
   * Default: 500 
   * @param time The duration
   */
  translationDuration(time: number): D3LineSubViewOptionsBuilder;
  
  /**
   * Set the X axis location: 'top' || 'bottom'
   * Default: 'bottom' 
   * @param loc The location
   */
  xAxisLocation(loc: string): D3LineSubViewOptionsBuilder;
  
  /**
   * Whether to extend the X domain to nice round numbers.
   * Default: true 
   * @param bool Whether to have a nice domain
   */
  xAxisNice(bool: boolean): D3LineSubViewOptionsBuilder;
  
  /**
   * Set the X axis scale: 'log' || 'linear'
   * Default: 'linear' 
   * @param scale The X axis scale
   */
  xAxisScale(scale: string): D3LineSubViewOptionsBuilder;

  /**
   * Set the number of digits after decimal place when 
   *    xValueToExponent is set to true.
   * Default: 4
   * 
   * @param digits The number of digits after decimal point
   */
  xExponentFractionDigits(digits: number): D3LineSubViewOptionsBuilder;
  
  /**
   * Set the X axis label; can be an HTML string.
   * Default: ''
   * @param label The X axis label 
   */
  xLabel(label: string): D3LineSubViewOptionsBuilder;
  
  /**
   * Set the X label padding in px.
   * Default: 8
   * @param pad The padding
   */
  xLabelPadding(pad: number): D3LineSubViewOptionsBuilder;
  
  /**
   * Set the number of X axis tick marks.
   * The specified count is only a hint; the scale may return more or 
   *    fewer values depending on the domain.
   *  Default: 8
   * @param count Number of tick marks
   */
  xTickMarks(count: number): D3LineSubViewOptionsBuilder;
  
  /**
   * Whether to format the X value in exponential form when X value
   *    is shown on tooltip, in data view, and when saving data.
   * Default: false
   * 
   * @param toExponenet Whether to format in exponential form
   */
  xValueToExponent(toExponenet: boolean): D3LineSubViewOptionsBuilder;

  /**
   * Set the Y axis location: 'left' || 'right'
   * Default: 'left' 
   * @param loc The location
   */
  yAxisLocation(loc: string): D3LineSubViewOptionsBuilder;
  
  /**
   * Whether to extend the Y domain to nice round numbers.
   * Default: true 
   * @param bool Whether to have a nice domain
   */
  yAxisNice(bool: boolean): D3LineSubViewOptionsBuilder;
  
  /**
   * Whether to reverse the Y axis direction.
   * Default: false
   * 
   * @param bool To reverse Y axis
   */
  yAxisReverse(bool: boolean): D3LineSubViewOptionsBuilder;

  /**
   * Set the Y axis scale: 'log' || 'linear'
   * Default: 'linear' 
   * @param scale The Y axis scale
   */
  yAxisScale(scale: string): D3LineSubViewOptionsBuilder;
  
  /**
   * Set the number of digits after decimal place when 
   *    yValueToExponent is set to true.
   * Default: 4
   * 
   * @param digits The number of digits after decimal point
   */
  yExponentFractionDigits(digits: number): D3LineSubViewOptionsBuilder;
  
  /**
   * Set the Y axis label; can be an HTML string.
   * Default: ''
   * @param label The Y axis label 
   */
  yLabel(label: string): D3LineSubViewOptionsBuilder;
  
  /**
   * Set the Y label padding in px.
   * Default: 10
   * @param pad The padding
   */
  yLabelPadding(pad: number): D3LineSubViewOptionsBuilder;
  
  /**
   * Set the number of Y axis tick marks.
   * The specified count is only a hint; the scale may return more or 
   *    fewer values depending on the domain.
   * Default: 6
   * @param count Number of tick marks
   */
  yTickMarks(count: number): D3LineSubViewOptionsBuilder;

  /**
   * Whether to format the Y value in exponential form when Y value
   *    is shown on tooltip, in data view, and when saving data.
   * Default: false
   * 
   * @param toExponenet Whether to format in exponential form
   */
  yValueToExponent(toExponenet: boolean): D3LineSubViewOptionsBuilder;

}
