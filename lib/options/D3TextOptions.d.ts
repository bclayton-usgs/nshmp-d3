/* D3TextOptions type definitions */

/**
 * Text options for plot when adding text to a plot.
 * 
 * Use D3TextOptions.builder() to customize options.
 * 
 * @class D3TextOptions
 * @author Brandon Clayton
 */
export class D3TextOptions {
 
  private constructor();

  /**
   * The alignment baseline. See CSS property alignment-baseline
   * Default: 'baseline'
   */
  alignmentBaseline: string;

  /**
   * The text color.
   * Default: 'black'
   */
  color: string;
  
  /**
   * The horizontal shift in the text from the X position.
   * Default: 0
   */
  dx: number;
  
  /**
   * The vertical shift in the text from the Y position.
   * Default: 0
   */
  dy: number;
 
  /**
   * The text font size in pixels.
   * Default: 14
   */
  fontSize: number;
  
  /**
   * The font weight.
   * Default: 400
   */
  fontWeight: number;
  
  /**
   * The text rotation.
   * Default: 0
   */
  rotate: number;
  
  /**
   * The stroke color.
   * Default: 'black'
   */
  stroke: string;
  
  /**
   * The stroke width.
   * Default: 0
   */
  strokeWidth: number;

  /**
   * The text anchor. See CSS property text-anchor.
   * Default: 'start'
   */
  textAnchor: string;

  /**
   * Return new builder.
   */
  static builder(): D3TextOptionsBuilder;

  /**
   * New instance of D3TextOptions with default options.
   */
  static withDefaults(): D3TextOptions;

}

/**
 * Builder for D3TextOptions
 * 
 * @class D3TextOptionsBuilder
 * @author Brandon Clayton
 */
export class D3TextOptionsBuilder {

  protected constructor();

  /**
   * Return new instance of D3TextOptions
   */
  build(): D3TextOptions;

  /**
   * Set the alignment baseline.
   * Default: 'baseline'
   * 
   * @param alignment The baseline
   */
  alignmentBaseline(alignment: string): D3TextOptionsBuilder;

  /**
   * Set the text color.
   * Default: 'black'
   * 
   * @param color The text color.
   */
  color(color: string): D3TextOptionsBuilder;

  /**
   * Set the shift in X.
   * Default: 0
   * 
   * @param dx The horizontal shift
   */
  dx(dx: number): D3TextOptionsBuilder;

  /**
   * Set the shift in Y.
   * Default: 0
   * 
   * @param dy The vertical shift
   */
  dy(dy: number): D3TextOptionsBuilder;

  /**
   * Set the text font size.
   * Default: 14
   * 
   * @param fontSize The font size
   */
  fontSize(fontSize: number): D3TextOptionsBuilder;

  /**
   * Set the font weight.
   * Default: 400
   * 
   * @param fontWeight The weight
   */
  fontWeight(fontWeight: number): D3TextOptionsBuilder;

/**
 * Set the text rotation.
 * Default: 0
 * 
 * @param rotate The rotation
 */
  rotate(rotate: number): D3TextOptionsBuilder;

  /**
   * Set the stroke color.
   * Default: 'black;
   * 
   * @param stroke The stroke
   */
  stroke(stroke: string): D3TextOptionsBuilder;

  /**
   * Set the stroke width.
   * Default: 0
   * 
   * @param strokeWidth The width
   */
  strokeWidth(strokeWidth: number): D3TextOptionsBuilder;

  /**
   * Set the text anchor.
   * Default: 'start'
   * 
   * @param textAnchor The text anchor 
   */
  textAnchor(textAnchor: string): D3TextOptionsBuilder;

}
