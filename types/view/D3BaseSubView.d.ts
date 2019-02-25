/* D3BaseSubView type definitions */

import { D3BaseSubViewOptions } from '../options/D3BaseSubViewOptions';

/**
 * Create a base sub view for D3BaseView. Adds basic SVG structure for a plot.
 * 
 * @class D3BaseSubView
 * @author Brandon Clayton
 */
export class D3BaseSubView {

  /**
   * Create new sub view.
   * 
   * @param containerEl Container element to append sub view
   * @param options The sub view options
   */
  constructor(containerEl: HTMLElement, options: D3BaseSubViewOptions);

  /** Container element to append sub view */
  containerEl: HTMLElement;

  /** Sub view options */
  options: D3BaseSubViewOptions;

  /** The SVG view box height in px */
  svgHeight: number;
  
  /** The SVG view box width in px */
  svgWidth: number;
  
  /** Plot height in px */
  plotHeight: number;
  
  /** Plot width in px */
  plotWidth: number;
    
  /** The sub view element */
  subViewBodyEl: HTMLElement;
 
  /** SVG elements */
  svg: D3BaseSubViewSVGElements;

}

/**
 * Container class for the D3BaseSubView SVG elements
 * 
 * @class D3BaseSubViewSVGElements
 * @author Brandon Clayton
 */
export class D3BaseSubViewSVGElements {

  protected constructor();

  /** The inner plot frame element */
  innerFrameEl: SVGElement;

  /** The inner plot group element */
  innerPlotEl: SVGElement;
  
  /** The outer plot frame element */
  outerFrameEl: SVGElement;
  
  /** The outer plot group element */
  outerPlotEl: SVGElement;
  
  /** The main SVG element */
  svgEl: SVGElement;
  
  /** The tooltip group element */
  tooltipEl: SVGElement;
  
  /** The tooltip foreign object element */
  tooltipForeignObjectEl: SVGElement;
  
  /** The tooltip table element */
  tooltipTableEl: HTMLElement;

  /**
   * Check that all elements are set.
   * 
   * @returns The elements
   */
  checkElements(): D3BaseSubViewSVGElements;

}
