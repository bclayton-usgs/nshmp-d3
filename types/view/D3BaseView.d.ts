/* D3BaseView type definitions */

import {
  D3BaseSubView,
  D3BaseSubViewOptions,
  D3BaseViewOptions,
  D3LineView, 
  D3LinePlot} from '../../lib';

/**
 * Create a base view for plots to reside. The view 
 *    can contain an upper and lower D3BaseSubView for multiple SVG
 *    plots in a single D3BaseView.
 * 
 * Must use D3BaseView.builder() to create a D3BaseView.
 * See D3BaseViewBuilder.
 * 
 * @class D3BaseView
 * @author Brandon Clayton
 */
export class D3BaseView {

  protected constructor();

  /** Whether to add a grid line toogle to the header */
  addGridLineToggle: boolean;

  /** Whether to add a legend toggle to the header */
  addLegendToggle: boolean;
  
  /** Whether to add a lower sub view */
  addLowerSubView: boolean;
  
  /** Container element to append view */
  containerEl: HTMLElement;
  
  /** View options */
  viewOptions: D3BaseSubViewOptions;
  
  resizeFullIcon: string;
  
  resizeSmallIcon: string;
  
  /** Data view, data table element */
  dataTableEl: HTMLElement;
  
  /** Metadata view element */
  metadataTableEl: HTMLElement;
  
  /** Bootstrap panel body element */
  viewPanelBodyEl: HTMLElement;
  
  /** Bootstrap panel element */
  viewPanelEl: HTMLElement;
  
  /** Main view element */
  viewEl: HTMLElement;

  /** Upper sub view */
  upperSubView: D3BaseSubView;
  
  /** Lower sub view */
  lowerSubView: D3BaseSubView;

  /** Elements of the view header */
  viewHeader: D3BaseViewHeaderElements;

  /** Elements of the view footer */
  viewFooter: D3BaseViewFooterElements;

  /** The SVG element in the data table view */
  dataTableSVGEl: SVGElement;
  
  /** The SVG element in the metadata view */
  metadataTableSVGEl: SVGElement;

  /**
   * Return a new D3BaseViewBuilder
   * 
   * @return new Builder
   */
  static builder(): D3BaseViewBuilder;

  /**
   * Create the metadata table in the 'Metadata' view.
   */
  createMetadataTable(): void;

  /**
   * Return the metadata.
   */
  getMetadata(): Map<string, number[] | string[]>;

  /**
   * Return the plot title HTML text
   */
  getTitle(): string;

  /**
   * Hide the view.
   */
  hide(): void;

  /**
   * Remove the view.
   */
  remove(): void;

  /**
   * Show the view.
   */
  show(): void;

  /**
   * Set the metadata 
   * 
   * @param metadata 
   */
  setMetadata(metadata: Map<string, number[] | string[]>): void;

  /**
   * Set the plot title. Shows the title in the view header if present.
   * 
   * @param title The plot title
   */
  setTitle(title: string): void;

  /**
   * Update the view size.
   * 
   * @param viewSize The view size: 'min' || 'minCenter' || 'max'
   */
  updateViewSize(viewSize: string): void;

}

/**
 * Builder for D3BaseView.
 * 
 * Use D3BaseView.builder() for new instance of builder.
 * 
 * @class D3BaseViewBuilder
 * @author Brandon Clayton
 */
export class D3BaseViewBuilder {

  protected constructor();

  /**
   * Return a new D3BaseView 
   */
  build(): D3BaseView;

  /**
   * Whether to add a grid line toogle in the view's header.
   * Default: true
   * 
   * @param bool Whether to add the grid line toogle 
   */
  addGridLineToogle(bool: boolean): D3BaseViewBuilder;

  /**
   * Whether to add a legend toogle in the view's header.
   * Default: true
   * 
   * @param bool Whether to add the legend toogle 
   */
  addLegendToggle(bool: boolean): D3BaseViewBuilder;

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
  addLowerSubView(bool: boolean): D3BaseViewBuilder;

  /**
   * Set the container element, where the view will be appended to.
   * 
   * @param el The container element to put the view. 
   */
  containerEl(el: HTMLElement): D3BaseViewBuilder;

  /**
   * Set the lower sub view options.
   * 
   * @param options The lower sub view options. 
   */
  lowerSubViewOptions(options: D3BaseSubViewOptions): D3BaseViewBuilder;

  /**
   * Set the upper sub view options.
   * 
   * @param options The upper sub view options.
   */
  upperSubViewOptions(options: D3BaseSubViewOptions): D3BaseViewBuilder;

  /**
   * Set the view options.
   * 
   * @param options The view options.
   */
  viewOptions(options: D3BaseViewOptions): D3BaseViewBuilder;

}

/**
 * Container class for D3BaseView footer elements.
 * 
 * @class D3BaseViewFooterElements
 * @author Brandon Clayton
 */
export class D3BaseViewFooterElements {

  protected constructor();

  /** The footer button toolbar element */
  btnToolbarEl: HTMLElement;

  /** The 'Data' button element on the button toolbar */
  dataBtnEl: HTMLElement;
  
  /** The footer element */
  footerEl: HTMLElement;
  
  /** The image only check box element in the save menu */
  imageOnlyEl: HTMLElement;
  
  /** The 'Metadata' button element on the button toolbar */
  metadataBtnEl: HTMLElement;
  
  /** The 'Plot' button element on the button toolbar */
  plotBtnEl: HTMLElement;
  
  /** The save menu element */
  saveMenuEl: HTMLElement;
  
  /** The plot, data, and metadata container element */
  viewSwitchBtnEl: HTMLElement;

  /**
   * Check that all elements are set.
   * 
   * @returns The elements
   */
  checkElements(): D3BaseViewFooterElements;

}

/**
 * Container class for D3BaseView header elements.
 * 
 * @class D3BaseViewHeaderElements
 * @author Brandon Clayton
 */
export class D3BaseViewHeaderElements {

  protected constructor();

  /** The grid line check icon element */
  gridLinesCheckEl: HTMLElement;
  
  /** The header element */
  headerEl: HTMLElement;
  
  /** The icons element */
  iconsEl: HTMLElement;
  
  /** The legend check icon element */
  legendCheckEl: HTMLElement;
  
  /** The title container element */
  titleContainerEl: HTMLElement;
  
  /** The title element */
  titleEl: HTMLElement;
 
  /** The resize icon element */
  viewResizeEl: HTMLElement;

  /**
   * Check that all elements are set.
   * 
   * @returns The elements
   */
  checkElements(): D3BaseViewHeaderElements;

}
