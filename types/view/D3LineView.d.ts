/* D3LineView type definitions */

import {
  D3BaseView,
  D3BaseViewBuilder,
  D3BaseViewFooterElements,
  D3LineSubView,
  D3LineViewOptions,
  D3LineData,
  D3BaseViewOptions,
  D3LineSubViewOptions } from '../../lib';

/**
 * @fileoverview Create a view for line plots. The view can 
 *    contain an upper and lower D3LineSubView for multiple SVG
 *    plots in a single D3LineView.
 * 
 * Must use D3LineView.builder() to create a D3LineView instance.
 * See D3LineViewBuilder.
 * 
 * @class D3LineView
 * @extends D3BaseView
 * @author Brandon Clayton
 */
export class D3LineView extends D3BaseView {

  protected constructor();

  /** Lower sub view */
  lowerSubView: D3LineSubView;

  /** Upper sub view */
  upperSubView: D3LineSubView;
  
  /** The Footer elements */
  viewFooter: D3LineViewFooterElements;
 
  /** View options */
  viewOptions: D3LineViewOptions | D3BaseViewOptions | any; 

  /**
   * @override
   * Return a new D3LineViewBuilder
   * 
   * @returns new Builder
   */
  static builder(): D3LineViewBuilder;

  /**
   * Create the data table in the 'Data' view. 
   * 
   * @param lineDatas The line datas
   */
  createDataTable(...lineDatas: D3LineData[]): void;

  /**
   * Get the D3LineData that will be saved to a file(s).
   * 
   * @return The line data to save
   */
  getSaveData(): D3LineData[];

  /**
   *  Get the X axis scale based on the D3LineViewOptions.synXAxisScale 
   *    and D3LineSubViewOptions.xAxisScale.
   * 
   * @param subView The sub view 
   * @returns The X axis scale: 'log' || 'linear'
   */
  getXAxisScale(subView: D3LineSubView): string;

  /**
   *  Get the Y axis scale based on the D3LineViewOptions.synYAxisScale 
   *    and D3LineSubViewOptions.yAxisScale.
   * 
   * @param subView The sub view 
   * @returns The Y axis scale: 'log' || 'linear'
   */
  getYAxisScale(subView: D3LineSubView): string;

  /**
   * Set the D3LineDatas that will be saved to a file. 
   * @param lineDatas To save 
   */
  setSaveData(...lineDatas: D3LineData[]): void;

}

/**
 * Builder for D3LineView.
 * 
 * Use D3LineView.builder() for new instance of builder.
 * 
 * @class D3LineViewBuilder
 * @extends D3BaseViewBuilder
 * @author Brandon Clayton
 */
export class D3LineViewBuilder extends D3BaseViewBuilder { 

  protected constructor();

  /** Build a new line view */
  build(): D3LineView;
  
  /**
   * Whether to add a grid line toogle in the view's header.
   * Default: true
   * 
   * @param bool Whether to add the grid line toogle 
   */
  addGridLineToogle(bool: boolean): D3LineViewBuilder;

  /**
   * Whether to add a legend toogle in the view's header.
   * Default: true
   * 
   * @param bool Whether to add the legend toogle 
   */
  addLegendToggle(bool: boolean): D3LineViewBuilder;

  /**
   * Whether to add a lower sub view; 
   *    adds the ability to have an upper and lower plot in a single view.
   * 
   * Default D3BaseSubViewOptions are applied from
   *    D3BaseSubViewOptions.lowerWithDefaults().
   * 
   * Use Builder.setLowerSubViewOptions to set custom settings.
   * 
   * Default: false
   */
  addLowerSubView(bool: boolean): D3LineViewBuilder;

  /**
   * Set the container element, where the view will be appended to.
   * 
   * @param el The container element to put the view. 
   */
  containerEl(el: HTMLElement): D3LineViewBuilder;

  /**
   * Set the lower sub view options.
   * 
   * @param options The lower sub view options. 
   */
  lowerSubViewOptions(options: D3LineSubViewOptions): D3LineViewBuilder;

  /**
   * Set the upper sub view options.
   * 
   * @param options The upper sub view options.
   */
  upperSubViewOptions(options: D3LineSubViewOptions): D3LineViewBuilder;

  /**
   * Set the view options.
   * 
   * @param options The view options.
   */
  viewOptions(options: D3LineViewOptions): D3LineViewBuilder;

}

/**
 * Container class for D3LineView footer elements
 * 
 * @class D3LineViewFooterElements
 * @extends D3BaseViewFooterElements
 * @author Brandon Clayton
 */
export class D3LineViewFooterElements extends D3BaseViewFooterElements {

  protected constructor();

  /** The X axis button element */
  xAxisBtnEl: HTMLElement;

  /** The X axis linear button element */
  xLinearBtnEl: HTMLElement;
  
  /** The X axis log button element */
  xLogBtnEl: HTMLElement;
  
  /** The Y axis button element */
  yAxisBtnEl: HTMLElement;
  
  /** The Y axis linear button element */
  yLinearBtnEl: HTMLElement;
  
  /** The Y axis log button element */
  yLogBtnEl: HTMLElement;

  /**
   * @override
   * Check that the elements are set
   */
  checkElements(): D3LineViewFooterElements;

}
