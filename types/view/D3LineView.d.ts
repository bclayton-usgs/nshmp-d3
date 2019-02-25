/* D3LineView type definitions */

import { D3BaseView, D3BaseViewBuilder, D3BaseViewFooterElements } from './D3BaseView';
import { D3LineSubView } from './D3LineSubView';
import { D3LineViewOptions } from '../options/D3LineViewOptions';
import { D3LineData } from '../data/D3LineData';
import { D3BaseViewOptions } from '../options/D3BaseViewOptions';

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
  build(): D3LineView | D3BaseView | any;
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
