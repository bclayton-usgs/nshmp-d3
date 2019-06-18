/* D3LineLegendOptions type definitions */

/**
 * The options for D3LineLegend
 *
 * Use D3LineLegendOptions.builder() to customize legend options or
 *    D3LineLegendOptions.withDefaults() for default legend options.
 *
 * @class D3LineLegendOptions
 * @author Brandon Clayton
 */
export class D3LineLegendOptions {

  protected constructor();

  /**
   * The legend background color; 'none' for no color.
   * Default: 'white'
   */
  backgroundColor: string;

  /**
   * The legend border color.
   * Default: 'gray'
   */
  borderColor: string;

  /**
   * The legend border width in px.
   * Default: 1
   */
  borderLineWidth: number;

  /**
   * The legend border radius in px.
   * Default: 4
   */
  borderRadius: number;

  /**
   * The legend CSS border style.
   * Default: 'solid'
   */
  borderStyle: string;

  /**
   * The legend font size
   * Default: 12
   */
  fontSize: string;

  /**
   * The line length of the line shown in the legend
   * Default: 40
   */
  lineLength: number;

  /**
   * The legend location:
   *    - 'bottom-left'
   *    - 'bottom-right'
   *    - 'top-left'
   *    - 'top-right'
   * Default: 'top-right'
   */
  location: string;

  /**
   * The bottom margin of the legend
   * Default: 10
   */
  marginBottom: number;

  /**
   * The left margin of the legend
   * Default: 10
   */
  marginLeft: number;

  /**
   * The right margin of the legend
   * Default: 10
   */
  marginRight: number;

  /**
   * The top margin of the legend
   * Default: 10
   */
  marginTop: number;

  /**
   * The number of maximum rows a legend can have. If a legend
   *    has more rows then maxRows a '... and X more ...' is
   *    added to the legend.
   * Default: 20 (upper sub view) || 4 (lower sub view)
   */
  maxRows: number;

  /**
   * The number of columns for the legend to have.
   * Default: 1
   */
  numberOfColumns: number;

  /**
   * The bottom padding in the legend
   * Default: 10
   */
  paddingBottom: number;

  /**
   * The left padding in the legend.
   * Default: 10
   */
  paddingLeft: number;

  /**
   * The right padding in the legend.
   * Default: 10
   */
  paddingRight: number;

  /**
   * The top padding in the legend.
   * Default: 10
   */
  paddingTop: number;

  /**
   * Return new D3LineLegendOptionsBuilder for lower sub view.
   * Only difference between lowerBuilder and upperBuilder is
   *    maxRows is set to 4 for lowerBuilder and 20 for upperBuilder.
   *
   * @returns New options builder
   */
  static lowerBuilder(): D3LineLegendOptionsBuilder;

  /**
   * Return new D3LineLegendOptionsBuilder for upper sub view.
   * Only difference between lowerBuilder and upperBuilder is
   *    maxRows is set to 6 for lowerBuilder and 22 for upperBuilder.
   *
   * @returns New options builder
   */
  static upperBuilder(): D3LineLegendOptionsBuilder;

  /**
   * Return new D3LineLegendOptions with defaults for lower sub view.
   * Only difference between lowerBuilder and upperBuilder is
   *    maxRows is set to 6 for lowerBuilder and 22 for upperBuilder.
   *
   * @returns New options with defaults
   */
  static lowerWithDefaults(): D3LineLegendOptions;

  /**
   * Return new D3LineLegendOptions with defaults for upper sub view.
   * Only difference between lowerBuilder and upperBuilder is
   *    maxRows is set to 6 for lowerBuilder and 22 for upperBuilder.
   *
   * @returns New options with defaults
   */
  static upperWithDefaults(): D3LineLegendOptions;

}

/**
 * @fileoverview Builder for D3LineLegendOptions
 *
 * Use D3LineLegendOptions.builder() to get new instance of builder.
 *
 * @class D3LineLegendOptionsBuilder
 * @author Brandon Clayton
 */
export class D3LineLegendOptionsBuilder {

  protected constructor();

  /**
   * Return new D3LineLegendOptions
   * @returns New legend options
   */
  build(): D3LineLegendOptions;

  /**
   * Set the legend background color; 'none' for no color.
   * Default: 'white'
   *
   * @param {String} color The background color
   */
  backgroundColor(color: string): D3LineLegendOptionsBuilder;

  /**
   * Set the legend border color.
   * Default: 'gray'
   *
   * @param color The border color
   */
  borderColor(color: string): D3LineLegendOptionsBuilder;

  /**
   * Set the legend border width in px.
   * Default: 1
   *
   * @param width The border width in px
   */
  borderLineWidth(width: number): D3LineLegendOptionsBuilder;

  /**
   * Set the legend border radius in px.
   * Default: 4
   *
   * @param radius The border radius
   */
  borderRadius(radius: number): D3LineLegendOptionsBuilder;

  /**
   * Set the lgeend CSS border style.
   * Default: 'solid'
   *
   * @param style The border style
   */
  borderStyle(style: string): D3LineLegendOptionsBuilder;

  /**
   * Set the tooltip font size.
   * Default: 12
   *
   * @param size The font size
   */
  fontSize(size: number): D3LineLegendOptionsBuilder;

  /**
   * Set the line length for the line shown in the legend.
   * Default: 40
   * @param length
   */
  lineLength(length: number): D3LineLegendOptionsBuilder;

  /**
   * Set the legend location:
   *    - 'bottom-left'
   *    - 'bottom-right'
   *    - 'top-left'
   *    - 'top-right'
   * Default: 'top-right'
   *
   * @param loc Legend location
   */
  location(loc: string): D3LineLegendOptionsBuilder;

  /**
   * Set the bottom margin of the legend.
   * Default: 10
   *
   * @param margin The bottom margin in px
   */
  marginBottom(margin: number): D3LineLegendOptionsBuilder;

  /**
   * Set the left margin of the legend.
   * Default: 10
   *
   * @param margin The left margin in px
   */
  marginLeft(margin: number): D3LineLegendOptionsBuilder;

  /**
   * Set the right margin of the legend.
   * Default: 10
   *
   * @param margin The right margin in px
   */
  marginRight(margin: number): D3LineLegendOptionsBuilder;

  /**
   * Set the top margin of the legend.
   * Default: 10
   *
   * @param margin The top margin in px
   */
  marginTop(margin: number): D3LineLegendOptionsBuilder;

  /**
   * Set the number of maximum rows a legend can have. If a legend
   *    has more rows then maxRows a '... and X more ...' is
   *    added to the legend.
   * Default: 10
   *
   * @param rows The max rows
   */
  maxRows(rows: number): D3LineLegendOptionsBuilder;

  /**
   * Set the number of columns for the legend to have.
   * Default: 1
   *
   * @param col The number of columns in the legend
   */
  numberOfColumns(col: number): D3LineLegendOptionsBuilder;

  /**
   * Set the bottom padding in the tooltip.
   * Default: 10
   *
   * @param {Number} pad The bottom padding in px
   */
  paddingBottom(pad: number): D3LineLegendOptionsBuilder;

  /**
   * Set the left padding in the tooltip.
   * Default: 10
   *
   * @param pad The left padding in px
   */
  paddingLeft(pad: number): D3LineLegendOptionsBuilder;

  /**
   * Set the right padding in the tooltip.
   * Default: 10
   *
   * @param pad The right padding in px
   */
  paddingRight(pad: number): D3LineLegendOptionsBuilder;

  /**
   * Set the top padding in the tooltip.
   * Default: 10
   *
   * @param pad The top padding in px
   */
  paddingTop(pad: number): D3LineLegendOptionsBuilder;

}
