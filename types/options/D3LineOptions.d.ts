/* D3LineOptions type definitions */

/**
 * Options for customizing a line in a line plot.
 * 
 * Use D3LineOptions.builder() to get new instance of D3LineOptionsBuilder.
 * See D3LineOptions.builder()
 * See D3LineOptionsBuilder
 * 
 * @class D3LineOptions
 * @author Brandon Clayton
 */
export class D3LineOptions {

  protected constructor();

  /**
   * The line color.
   * The default color is set based on the current color scheme
   *    in D3LineData.colorScheme
   */
  color: string;

  /**
   * The id of the line, should have no spaces.
   */
  id: string;

  /**
   * The label of the line to show in the tooltip and legend
   */
  label: string;

  /**
   * The line style: 
   *    - '-' || 'solid': Solid line
   *    - '--' || 'dashed': Dashed line
   *    - ':' || 'dotted': Dotted line
   *    - '-:' || 'dash-dot': Dahsed-dotted
   *    - 'none': No line
   * Default: 'solid'
   */
  lineStyle: string;

  /**
   * The line width.
   * Default: 2.5
   */
  lineWidth: number;

  /**
   * The marker color.
   * The default color is set based on the current color scheme
   *    in D3LineData.colorScheme
   */
  markerColor: string;

  /**
   * The marker edge color.
   * The default color is set based on the current color scheme
   *    in D3LineData.colorScheme
   */
  markerEdgeColor: string;

  /**
   * The marker edge width.
   * Default: 1.0
   */
  markerEdgeWidth: number;

  /**
   * The marker size.
   * Default: 6
   */
  markerSize: number;

  /**
   * The marker style:
   *    - 's' || 'square': Square markers
   *    - 'o' || 'circle': Circle markers
   *    - '+' || 'plus-sign': Plus sign markers
   *    - 'x' || 'cross': Cross sign markers
   *    - '^' || 'up-triangle': Up-pointing triangle
   *    - 'v' || 'down-triangle': Down-pointing triangle
   *    - '<' || 'left-triangle': Left-pointing triangle
   *    - '>' || 'right-triangle': Right-pointing triangle
   *    - 'd' || 'diamond': Diamond markers
   *    - '*' || 'star': Star markers
   * Default: 'circle'
   */
  markerStyle: string;

  /**
   * Whether the data is selectable in the plot.
   * Default: true
   */
  selectable: boolean;

  /**
   * The plot selection multiplier to be applied to the 
   *    line width, marker size, and marker edge size, when a line
   *    or marker is selected.
   * Default: 2.0
   */
  selectionMultiplier: number;

  /**
   * Whether to show the data in the legend.
   * Default: true
   */
  showInLegend: boolean;

  /**
   * The SVG dash array based on the lineStyle
   */
  svgDashArray: string;

  /**
   * The D3 symbol associated with the marker style.
   */
  d3Symbol: d3.Symbol<any, any>;

  /**
   * The D3 symbol sizes are are, square pixels.
   */
  d3SymbolSize: number;

  /**
   * The D3 symbol rotate.
   */
  d3SymbolRotate: number;
  
  /**
   * Create a new D3LineOptions with default options.
   * @returns New D3LineOptions instance
   */
  static withDefaults(): D3LineOptions;

  /**
   * Create line options for reference lines.
   */
  static withRefLineDefaults(): D3LineOptions;

  /**
   * Returns a new D3LineOptionsBuilder
   * @returns New builder
   */
  static builder(): D3LineOptionsBuilder;

}

/**
 * Builder for D3LineOptions
 * 
 * Use D3LineOptions.builder() for new instance of D3LineOptionsBuilder
 * 
 * @class D3LineOptionsBuilder
 * @author Brandon Clayton
 */
export class D3LineOptionsBuilder {
  
  protected constructor();

  /**
   * Returns new D3LineOptions
   * 
   * @returns new D3LineOptions
   */
  build(): D3LineOptions;

  /**
   * Copy D3LineOptions into the builder.
   * 
   * @param options The options to copy
   */
  fromCopy(options: D3LineOptions): D3LineOptionsBuilder;

  /**
   * Set the line color.
   * The default color is set based on the current color scheme
   *    in D3LineData.colorScheme.
   * 
   * @param color The line color 
   */
  color(color: string): D3LineOptionsBuilder;

  /**
   * Set the id of the line.
   * 
   * @param id The id of the line 
   */
  id(id: string): D3LineOptionsBuilder;

  /**
   * Set the label for the line. Shown in tooltip and legend.
   * 
   * @param label The label for the line 
   */
  label(label: string): D3LineOptionsBuilder;

  /**
   * Set the line style: 
   *    - '-' || 'solid': Solid line
   *    - '--' || 'dashed': Dashed line
   *    - ':' || 'dotted': Dotted line
   *    - '-:' || 'dash-dot': Dahsed-dotted
   *    - 'none': No line
   * Default: 'solid'
   * 
   * @param style 
   */
  lineStyle(style: string): D3LineOptionsBuilder;

  /**
   * Set the line width.
   * Default: 2.5
   * 
   * @param width The line width 
   */
  lineWidth(width: number): D3LineOptionsBuilder;

  /**
   * Set the marker color.
   * The default color is set based on the current color scheme
   *    in D3LineData.colorScheme
   * 
   * @param color 
   */
  markerColor(color: String): D3LineOptionsBuilder;

  /**
   * Set the marker edge color.
   * The default color is set based on the current color scheme
   *    in D3LineData.colorScheme
   * 
   * @param color The marker edge color 
   */
  markerEdgeColor(color: string): D3LineOptionsBuilder;

  /**
   * Set the marker edge width.
   * Default: 1.0
   * 
   * @param width The marker edge width 
   */
  markerEdgeWidth(width: number): D3LineOptionsBuilder;

  /**
   * The marker size.
   * Default: 6
   * 
   * @param size The marker size
   */
  markerSize(size: number): D3LineOptionsBuilder;

  /**
   * Set the marker style:
   *    - 's' || 'square': Square markers
   *    - 'o' || 'circle': Circle markers
   *    - '+' || 'plus-sign': Plus sign markers
   *    - 'x' || 'cross': Cross sign markers
   *    - '^' || 'up-triangle': Up-pointing triangle
   *    - 'v' || 'down-triangle': Down-pointing triangle
   *    - '<' || 'left-triangle': Left-pointing triangle
   *    - '>' || 'right-triangle': Right-pointing triangle
   *    - 'd' || 'diamond': Diamond markers
   *    - '*' || 'star': Star markers
   * Default: 'circle'
   * 
   * @param marker The marker
   */
  markerStyle(marker: string): D3LineOptionsBuilder;

  /**
   * Set whether the data can be selected in the plot.
   * 
   * @param selectable Whether data is selectable
   */
  selectable(selectable: boolean): D3LineOptionsBuilder;

  /**
   * Set the plot selection multiplier to be applied to the 
   *    line width, marker size, and marker edge size, when a line
   *    or marker is selected.
   * Default: 2.0
   * 
   * @param mult The multiplier
   */
  selectionMultiplier(mult: number): D3LineOptionsBuilder;

  /**
   * Whether to show the data in the legend.
   * Default: true
   * 
   * @param bool Whether to show the data in the legend
   */
  showInLegend(bool: boolean): D3LineOptionsBuilder;

}
