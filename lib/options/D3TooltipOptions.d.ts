/* D3TooltipOptions type definitions */

/**
 * The options for D3Tooltip
 *
 * Use D3TooltipOptions.builder() to customize tooltip options or
 *    D3TooltipOptions.withDefaults() for default tooltip options.
 *
 * @class D3TooltipOptions
 * @author Brandon Clayton
 */
export class D3TooltipOptions {

  private constructor();

  /**
   * The tooltip background color; 'none' for no color.
   * Default: 'white'
   */
  backgroundColor: string;

  /**
   * The tooltip border color.
   * Default: 'gray'
   */
  borderColor: string;

  /**
   * The tooltip border width in px.
   * Default: 1
   */
  borderLineWidth: number;

  /**
   * The tooltip border radius in px.
   * Default: 4
   */
  borderRadius: number;

  /**
   * The tooltip CSS border style.
   * Default: 'solid'
   */
  borderStyle: string;

  /**
   * The tooltip font size
   * Default: 12
   */
  fontSize: number;

  /**
   * The X offset of the tooltip from the data point
   * Default: 2
   */
  offsetX: number;

  /**
   * The Y offset of the tooltip from the data point
   * Default: 10
   */
  offsetY: number;

  /**
   * The bottom padding in the tooltip
   * Default: 10
   */
  paddingBottom: number;

  /**
   * The left padding in the tooltip
   * Default: 10
   */
  paddingLeft: number;

  /**
   * The right padding in the tooltip
   * Default: 10
   */
  paddingRight: number;

  /**
   * The top padding in the tooltip
   * Default: 10
   */
  paddingTop: number;

  /**
   * Return new D3TooltipOptionsBuilder
   * @returns New options builder
   */
  static builder(): D3TooltipOptionsBuilder;

  /**
   * Return new D3TooltipOptions with defaults
   * @returns New options with defaults
   */
  static withDefaults(): D3TooltipOptions;

}

/**
 * @fileoverview Builder for D3TooltipOptions
 *
 * Use D3TooltipOptions.builder() to get new instance of builder.
 *
 * @class D3TooltipOptionsBuilder
 * @author Brandon Clayton
 */
export class D3TooltipOptionsBuilder {

  protected constructor();

  /**
   * Return new D3TooltipOptions
   * @returns New tooltip options
   */
  build(): D3TooltipOptions;

  /**
   * Set the tooltip background color; 'none' for no color.
   * Default: 'white'
   *
   * @param color The background color
   */
  backgroundColor(color: string): D3TooltipOptionsBuilder;

  /**
   * Set the tooltip border color.
   * Default: 'gray'
   *
   * @param color The border color
   */
  borderColor(color: string): D3TooltipOptionsBuilder;

  /**
   * Set the tooltip border width in px.
   * Default: 1
   *
   * @param width The border width in px
   */
  borderLineWidth(width: number): D3TooltipOptionsBuilder;

  /**
   * Set the tooltip border radius in px.
   * Default: 4
   *
   * @param radius The border radius
   */
  borderRadius(radius: number): D3TooltipOptionsBuilder;

  /**
   * Set the tooltip CSS border style.
   * Default: 'solid'
   *
   * @param style The border style
   */
  borderStyle(style: string): D3TooltipOptionsBuilder;

  /**
   * Set the tooltip font size.
   * Default: 12
   *
   * @param size The font size
   */
  fontSize(size: number): D3TooltipOptionsBuilder;

  /**
   * Set the X offset of the tooltip from the data point.
   * Default: 2
   *
   * @param offset The X offset
   */
  offsetX(offset: number): D3TooltipOptionsBuilder;

  /**
   * Set the Y offset of the tooltip from the data point.
   * Default: 10
   *
   * @param offset The Y offset
   */
  offsetY(offset: number): D3TooltipOptionsBuilder;

  /**
   * Set the bottom padding in the tooltip.
   * Default: 10
   *
   * @param pad The bottom padding in px
   */
  paddingBottom(pad: number): D3TooltipOptionsBuilder;

  /**
   * Set the left padding in the tooltip.
   * Default: 10
   *
   * @param pad The left padding in px
   */
  paddingLeft(pad: number): D3TooltipOptionsBuilder;

  /**
   * Set the right padding in the tooltip.
   * Default: 10
   *
   * @param pad The right padding in px
   */
  paddingRight(pad: number): D3TooltipOptionsBuilder;

  /**
   * Set the top padding in the tooltip.
   * Default: 10
   *
   * @param pad The top padding in px
   */
  paddingTop(pad: number): D3TooltipOptionsBuilder;

}
