/* D3LineViewOptions type definitions */

import {
  D3BaseViewOptions,
  D3BaseViewOptionsBuilder } from '../../lib';

/**
 * Create options for D3LineView
 *
 * Use Builder to customize the options or use
 *    D3LineViewOptions.withDefaults()
 *
 * @class D3LineViewOptions
 * @extends D3BaseViewOptions
 * @author Brandon Clayton
 */
export class D3LineViewOptions extends D3BaseViewOptions {

  protected constructor();

  /**
   * Whether to disable the X axis buttons on the view's footer.
   * Default: false
   */
  disableXAxisBtns: boolean;

  /**
   * Whether to disable the Y axis buttons on the view's footer.
   */
  disableYAxisBtns: boolean;

  /**
   * Whether to sync the plot selections between the the upper and
   *    lower sub views.
   * Default: false
   */
  syncSubViewsSelections: boolean;

  /**
   * Whether to sync the upper and
   *    lower sub views Y axis scale, 'log' or 'linear', when toggling
   *    the X axis buttons in the view's footer.
   * Default: false
   */
  syncXAxisScale: boolean;

  /**
   * Whether to sync the upper and
   *    lower sub views Y axis scale, 'log' or 'linear', when toggling
   *    the Y axis buttons in the view's footer.
   * Default: false
   */
  syncYAxisScale: boolean;

  /**
   * The X axis scale: 'log' || 'linear'
   * NOTE: Overriden by D3LineSubViewOptions.xAxisScale if
   *    syncXAxisScale is false.
   * Default: 'linear'
   */
  xAxisScale: string;

  /**
   * The Y axis scale: 'log' || 'linear'
   * NOTE: Overriden by D3LineSubViewOptions.yAxisScale if
   *    syncYAxisScale is false.
   * Default: 'linear'
   */
  yAxisScale: string;

  /**
   * @override
   * Return a new D3LineViewOptions instance with default options
   */
  static withDefaults(): D3LineViewOptions;

  /**
   * @override
   * Return a new D3LineViewOptionsBuilder
   */
  static builder(): D3LineViewOptionsBuilder;

}

/**
 * @fileoverview Builder for D3LineViewOptions.
 *
 * Use D3LineViewOptions.builder() for new instance of builder.
 *
 * @class D3LineViewOptionsBuilder
 * @extends D3BaseViewOptionsBuilder
 * @author Brandon Clayton
 */
export class D3LineViewOptionsBuilder extends D3BaseViewOptionsBuilder {

  protected constructor();

  /**
   * Return new D3LineViewOptions instance
   */
  build(): D3LineViewOptions;

  /**
   * Whether to disable the X axis buttons on the view's footer.
   * Default: false
   *
   * @param bool Whether to disable X axis buttons
   */
  disableXAxisBtns(bool: boolean): D3LineViewOptionsBuilder;

  /**
   * Whether to disable the Y axis buttons on the view's footer.
   * Default: false
   *
   * @param bool Whether to disable Y axis buttons
   */
  disableYAxisBtns(bool: boolean): D3LineViewOptionsBuilder;

  /**
   * Whether to sync selection between the two sub views.
   * Note: The data IDs for the upper and lower sub view must be the
   *    same to sync.
   *
   * Default: false
   *
   * @param bool Whether to sync sub views selections
   */
  syncSubViewsSelections(bool: boolean): D3LineViewOptionsBuilder;

  /**
   * Choose to sync the X axis scale between the two sub views starting
   *    with a specified scale.
   *
   * @param bool Whether to sync the X axis scale
   * @param scale What X axis scale to start with
   */
  syncXAxisScale(bool: boolean, scale?: string): D3LineViewOptionsBuilder;

  /**
   * Choose to sync the Y axis scale between the two sub views starting
   *    with a specified scale.
   *
   * @param bool Whether to sync the Y axis scale
   * @param scale What Y axis scale to start with
   */
  syncYAxisScale(bool: boolean, scale?: string): D3LineViewOptionsBuilder;

  /**
   * Set the title font size in px.
   * Default: 18
   *
   * @param fontSize The title font size
   */
  titleFontSize(fontSize: number): D3LineViewOptionsBuilder;

  /**
   * Set the D3BaseView view size
   *
   * @param size The view size, either: 'min' || 'minCenter' || 'max'
   */
  viewSize(size: string): D3LineViewOptionsBuilder;

  /**
   * Set the Bootstrap column size when viewSize is'min'
   *
   * @param size The Bootstrap column size with
   *    viewSize is 'min'
   */
  viewSizeMin(size: string): D3LineViewOptionsBuilder;

  /**
   * Set the Bootstrap column size when viewSize is'minCenter'
   *
   * @param size The Bootstrap column size with viewSize is 'minCenter'
   */
  viewSizeMinCenter(size: string): D3LineViewOptionsBuilder;

  /**
   * Set the Bootstrap column size when viewSize is'max'
   *
   * @param size The Bootstrap column size with viewSize is 'max'
   */
  viewSizeMax(size: string): D3LineViewOptionsBuilder;

}
