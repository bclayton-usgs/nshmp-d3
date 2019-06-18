/* D3SaveFigureOptions type definitions */

/**
 * The options for D3SaveFigure
 *
 * Use D3SaveFigureOptions.builder() to get new instance of D3SaveFigureOptionsBuilder
 * See D3SaveFigureOptions.builder()
 * See D3SaveFigureOptionsBuilder
 *
 * @class D3SaveFigureOptions
 * @author Brandon Clayton
 */
export class D3SaveFigureOptions {

  private constructor();

  /**
   * Whether to add a footer containing the URL and date to the plot page.
   * Default: true
   */
  addFooter: boolean;

  /**
   * Whether to add a table of the metadata.
   * Note: Metadata must be set using D3BaseView.setMetadata()
   * Default: true
   */
  addMetadata: boolean;

  /**
   * Whether to add the plot title.
   * Default: true
   */
  addTitle: boolean;

  /**
   * The DPI to save the figure at.
   * Default: 300
   */
  dpi: number;

  /**
   * The font size of the footer.
   * Default: 10
   */
  footerFontSize: number;

  /**
   * The footer line break distance in pixels.
   * Deafult: 14
   */
  footerLineBreak: number;

  /**
   * The padding around the footer.
   * Default: 10
   */
  footerPadding: number;

  /**
   * The left margin for the figure on the page. Can be either
   *    'center' or number in inches.
   * Default: 'center'
   */
  marginLeft: number | string;

  /**
   * The top margin for the figure on the page in inches.
   * Default: 0.5
   */
  marginTop: number;

  /**
   * The number of columns allowed in the metadata table.
   * Default: 3
   */
  metadataColumns: number;

  /**
   * The metadata table font size in pixels.
   * Default: 10
   */
  metadataFontSize: number;

  /**
   * The top margin in inches from the bottom of the figure
   *    to the metadata table.
   * Default: 0.5
   */
  metadataMarginTop: number;

  /**
   * The maximum number of values in a column in the metadata table.
   * Once the values is greater than this a '... and X more ...' is added.
   * Default: 5
   */
  metadataMaxColumnValues: number;

  /**
   * The page height in inches.
   * Default: 8.5
   */
  pageHeight: number;

  /**
   * The page width in inches.
   * Default: 11.0
   */
  pageWidth: number;

  /**
   * The title font size.
   * Default: 14
   */
  titleFontSize: number;

  /**
   * The title location, either: 'center' || 'left'
   * Default: 'center'
   */
  titleLocation: string;

  /**
   * Returns a new D3SaveFigureOptionsBuilder
   */
  static builder(): D3SaveFigureOptionsBuilder;

  /**
   * Returns new D3SaveFigureOptions with default values
   */
  static withDefaults(): D3SaveFigureOptions;

}

/**
 * The D3SaveFigureOptions builder
 *
 * Use D3SaveFigureOptions.builder() for new instance of builder
 *
 * @class D3SaveFigureOptionsBuilder
 * @author Brandon Clayton
 */
export class D3SaveFigureOptionsBuilder {

  protected constructor();

  /**
   * Return new instance of D3SaveFigureOptions
   */
  build(): D3SaveFigureOptions;

  /**
   * Set whether to add a footer containing the URL and date to the plot page.
   * Default: true
   *
   * @param addFooter Whether to add footer
   */
  addFooter(addFooter: boolean): D3SaveFigureOptionsBuilder;

  /**
   * Set whether to add a table of the metadata.
   * Note: Metadata must be set using D3BaseView.setMetadata()
   * Default: true
   *
   * @param addMetadata Whether to add metadata table
   */
  addMetadata(addMetadata: boolean): D3SaveFigureOptionsBuilder;

  /**
   * Set whether to add the plot title.
   * Default: true
   *
   * @param addTitle Whether to add title
   */
  addTitle(addTitle: boolean): D3SaveFigureOptionsBuilder;

  /**
   * Set the DPI to save the figure at.
   * Default: 300
   *
   * @param dpi The plot DPI to save at
   */
  dpi(dpi: number): D3SaveFigureOptionsBuilder;

  /**
   * Set the font size of the footer.
   * Default: 10
   *
   * @param fontSize The footer font size
   */
  footerFontSize(fontSize: number): D3SaveFigureOptionsBuilder;

  /**
   * Set the footer line break distance in pixels.
   * Deafult: 14
   *
   * @param lineBreak The footer line break
   */
  footerLineBreak(lineBreak: number): D3SaveFigureOptionsBuilder;

  /**
   * Set the padding around the footer.
   * Default: 10
   *
   * @param padding The padding around the footer
   */
  footerPadding(padding: number): D3SaveFigureOptionsBuilder;

  /**
   * Set the left margin for the figure on the page. Can be either
   *    'center' or number in inches.
   * Default: 'center'
   *
   * @param marginLeft The left margin of the figure
   */
  marginLeft(marginLeft: number | string): D3SaveFigureOptionsBuilder;

  /**
   * Set the top margin for the figure on the page in inches.
   * Default: 0.5
   *
   * @param marginTop The top margin of the plot
   */
  marginTop(marginTop: number): D3SaveFigureOptionsBuilder;

  /**
   * Set the number of columns allowed in the metadata table.
   * Default: 3
   *
   * @param columns The number of metadata table columns
   */
  metadataColumns(columns: number): D3SaveFigureOptionsBuilder;

  /**
   * Set the metadata table font size in pixels.
   * Default: 10
   *
   * @param fontSize The metadata table font size
   */
  metadataFontSize(fontSize: number): D3SaveFigureOptionsBuilder;

  /**
   * Set the top margin in inches from the bottom of the figure
   *    to the metadata table.
   * Default: 0.5
   *
   * @param marginTop The metadata top margin
   */
  metadataMarginTop(marginTop: number): D3SaveFigureOptionsBuilder;

  /**
   * Set the maximum number of values in a column in the metadata table.
   * Once the values is greater than this a '... and X more ...' is added.
   * Default: 5
   *
   * @param max The max column values
   */
  metadataMaxColumnValues(max: number): D3SaveFigureOptionsBuilder;

  /**
   * Set the page height in inches.
   * Default: 8.5
   *
   * @param height The page height in inches
   */
  pageHeight(height: number): D3SaveFigureOptionsBuilder;

  /**
   * Set the page width in inches.
   * Default: 11.0
   *
   * @param width The page width in inches
   */
  pageWidth(width: number): D3SaveFigureOptionsBuilder;

  /**
   * Set the title font size.
   * Default: 14
   *
   * @param fontSize The title font size
   */
  titleFontSize(fontSize: number): D3SaveFigureOptionsBuilder;

  /**
   * Set the title location, either: 'center' || 'left'
   * Default: 'center'
   *
   * @param loc The title location
   */
  titleLocation(loc: string): D3SaveFigureOptionsBuilder;

}
