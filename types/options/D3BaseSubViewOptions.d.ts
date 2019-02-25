/* D3BaseSubViewOptions type definitions */

import { D3SaveFigureOptions } from './D3SaveFigureOptions';
import { D3TooltipOptions } from './D3TooltipOptions';

/**
 * Create options for D3BaseSubView.
 * 
 * Use D3BaseSubViewOptions.lowerBuilder or 
 *    D3BaseSubViewOptions.upperBuilder to customize options 
 *    for lower and upper sub view or use 
 *    D3BaseSubViewOptions.upperWithDefaults() or 
 *    D3BaseSubViewOptions.lowerWithDefaults() for default options.
 * 
 * Note: The only difference between upperWithDefaults() and 
 *    lowerWithDefault() is the plot height. The lower view defaults with
 *    224 px for plot height while the upper is 504 px.
 * 
 * @class D3BaseSubViewOptions
 * @author Brandon Clayton
 */
export class D3BaseSubViewOptions {

  protected constructor();

  /**
   * The filename for downloading
   * Default: 'file'
   */
  filename: string;

  /**
   * The label for the sub view
   * Default: 'upper' || 'lower'
   */
  label: string;

  /** 
   * Margin bottom for the SVG plot in px.
   * Default: 15
   */
  marginBottom: number;
  
  /** 
   * Margin left for the SVG plot in px.
   * Default: 20
   */
  marginLeft: number;
  
  /** 
   * Margin right for the SVG plot in px.
   * Default: 10
   */
  marginRight: number;

  /** 
   * Margin top for the SVG plot in px.
   * Default: 10
   */
  marginTop: number;

  /** 
   * Padding bottom for the SVG plot in px.
   * Default: 35
   */
  paddingBottom: number;
  
  /** 
   * Padding left for the SVG plot in px.
   * Default: 40
   */
  paddingLeft: number;
  
  /** 
   * Padding right for the SVG plot in px.
   * Default: 20
   */
  paddingRight: number;

  /** 
   * Padding top for the SVG plot in px.
   * Default: 10
   */
  paddingTop: number;

  /**
   * SVG plot height for SVG view box in px.
   * Default: 504 (upper) || 224 (lower)
   */
  plotHeight: number;

  /**
   * SVG plot width for SVG view box in px.
   * Default: 896
   */
  plotWidth: number;

  /**
   * The sub view type: 'lower' || 'upper'
   */
  subViewType: string;

  /**
   * The save figure options.
   * Default: D3SaveFigureOptions.withDefaults()
   */
  saveFigureOptions: D3SaveFigureOptions;

  /**
   * The tooltip options.
   * Default: D3TooltipOptions.withDefaults()
   * @type {D3TooltipOptions}
   */
  tooltipOptions: D3TooltipOptions;

  /** 
   * Return new D3BaseSubViewOptions.Builder for lower sub view 
   * 
   * @returns The lower base sub view options builder
   */
  static lowerBuilder(): D3BaseSubViewOptionsBuilder;

  /** 
   * Return new D3BaseSubViewOptions for lower sub view
   * 
   * @returns The lower base sub view options
   */
  static lowerWithDefaults(): D3BaseSubViewOptions;

  /** 
   * Return new D3BaseSubViewOptions.Builder for upper sub view 
   * 
   * @returns The upper base sub view options builder
   */
  static upperBuilder(): D3BaseSubViewOptionsBuilder;

  /** 
   * Return new D3BaseSubViewOptions for upper sub view 
   * 
   * @returns The upper base sub view options
   */
  static upperWithDefaults(): D3BaseSubViewOptions;

}

/**
 * @fileoverview Builder for D3BaseSubViewOptions
 * 
 * Use D3BaseSubViewOptions.lowerBuilder() or
 *    D3BaseSubViewOptions.upperBuilder() to get new instance of builder.
 * 
 * @class D3SubViewOptionsBuilder
 * @author Brandon Clayton
 */
export class D3BaseSubViewOptionsBuilder {

  protected constructor();

  /**
   * Return new D3BaseSubViewOptions
   */
  build(): D3BaseSubViewOptions;

  /**
   * Set the filename for downloading.
   * Default: 'file'
   * 
   * @param name The filename
   */
  filename(name: string): D3BaseSubViewOptionsBuilder;

  /**
   * Set the label for the sub view.
   * Default: ''
   * 
   * @param label The label
   */
  label(label: string): D3BaseSubViewOptionsBuilder;

  /**
   * Set the bottom margin for the SVG plot in px.
   * Default: 15
   * 
   * @param margin The bottom margin 
   */
  marginBottom(margin: number): D3BaseSubViewOptionsBuilder;

  /**
   * Set the left margin for the SVG plot in px.
   * Default: 20
   * 
   * @param margin The left margin 
   */
  marginLeft(margin: number): D3BaseSubViewOptionsBuilder;

  /**
   * Set the right margin for the SVG plot in px.
   * Default: 10
   * 
   * @param margin The right margin 
   */
  marginRight(margin: number): D3BaseSubViewOptionsBuilder;

  /**
   * Set the top margin for the SVG plot in px.
   * Default: 10
   * 
   * @param margin The top margin 
   */
  marginTop(margin: number): D3BaseSubViewOptionsBuilder;

  /**
   * Set the bottom padding for the SVG plot in px.
   * Default: 35
   * 
   * @param margin The bottom margin 
   */
  paddingBottom(padding: number): D3BaseSubViewOptionsBuilder;

  /**
   * Set the left padding for the SVG plot in px.
   * Default: 40
   * 
   * @param margin The left margin 
   */
  paddingLeft(padding: number): D3BaseSubViewOptionsBuilder;

  /**
   * Set the right padding for the SVG plot in px.
   * Default: 20
   * 
   * @param margin The right margin 
   */
  paddingRight(padding: number): D3BaseSubViewOptionsBuilder;

  /**
   * Set the top padding for the SVG plot in px.
   * Default: 10
   * 
   * @param margin The top margin 
   */
  paddingTop(padding: number): D3BaseSubViewOptionsBuilder;

  /**
   * Set the SVG plot height in px.
   * Default: 504 (upper) || 224 (lower)
   * 
   * @param height The plot height
   */
  plotHeight(height: number): D3BaseSubViewOptionsBuilder;

  /**
   * Set the SVG plot width in px.
   * Default: 896
   * 
   * @param width The plot width
   */
  plotWidth(width: number): D3BaseSubViewOptionsBuilder;

  /**
   * Set the save figure options.
   * Default: D3SaveFigureOptions.withDefaults()
   * 
   * @param options The save figure options
   */
  saveFigureOptions(options: D3SaveFigureOptions): D3BaseSubViewOptionsBuilder;

  /**
   * Set the tooltip options.
   * Default: D3TooltipOptions.withDefaults()
   *  
   * @param options The tooltip options
   */
  tooltipOptions(options: D3TooltipOptions): D3BaseSubViewOptionsBuilder;

}
