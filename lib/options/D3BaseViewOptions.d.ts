/* D3BaseViewOptions type definitions */

/**
 * Create options for D3BaseView.
 *
 * Use D3BaseViewOptions.builder() to customize the options or use
 *    D3BaseViewOptions.withDefault() for default options.
 *
 * @class D3BaseViewOptions
 * @author Brandon Clayton
 */
export class D3BaseViewOptions {

  protected constructor();

  /**
   * The title font size in the view's header in px.
   * Default: 18
   */
  titleFontSize: number;

  /**
   * The D3BaseView view size to start with, either:
   *    'min' || 'minCenter' || 'max'
   *
   * Default value: 'max'
   */
  viewSizeDefault: string;

  /**
   * The Bootstrap column size when viewSizeDefault is 'max'
   */
  viewSizeMax: string;

  /**
   * The Bootstrap column size when viewSizeDefault is 'min'
   */
  viewSizeMin: string;

  /**
   * The Bootstrap column size when viewSizeDefault is 'minCenter'
   */
  viewSizeMinCenter: string;

  /**
   * Return a new D3BaseViewOptions instance with default options
   */
  static withDefaults(): D3BaseViewOptions;

  /**
   * Return a new D3BaseViewOptions.Builder
   */
  static builder(): D3BaseViewOptionsBuilder;

}

/**
 * @fileoverview Builder for D3BaseViewOptions
 *
 * Use D3BaseViewOptions.builder() for new instance of builder.
 *
 * @class D3BaseViewOptionsBuilder
 * @author Brandon Clayton
 */
export class D3BaseViewOptionsBuilder {

  protected constructor();

  /**
   * Return new D3BaseViewOptions instance
   */
  build(): D3BaseViewOptions;

  /**
   * Set the title font size in px.
   * Default: 18
   *
   * @param fontSize The title font size
   */
  titleFontSize(fontSize: number): D3BaseViewOptionsBuilder;

  /**
   * Set the D3BaseView view size
   *
   * @param size The view size, either: 'min' || 'minCenter' || 'max'
   */
  viewSize(size: string): D3BaseViewOptionsBuilder;

  /**
   * Set the Bootstrap column size when viewSize is'min'
   *
   * @param size The Bootstrap column size with
   *    viewSize is 'min'
   */
  viewSizeMin(size: string): D3BaseViewOptionsBuilder;

  /**
   * Set the Bootstrap column size when viewSize is'minCenter'
   *
   * @param size The Bootstrap column size with viewSize is 'minCenter'
   */
  viewSizeMinCenter(size: string): D3BaseViewOptionsBuilder;

  /**
   * Set the Bootstrap column size when viewSize is'max'
   *
   * @param size The Bootstrap column size with viewSize is 'max'
   */
  viewSizeMax(size: string): D3BaseViewOptionsBuilder;

}
