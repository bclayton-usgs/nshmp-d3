
/* D3LineSubView type definitions */

import { D3BaseSubView, D3BaseSubViewSVGElements } from './D3BaseSubView';
import { D3LineSubViewOptions } from '../options/D3LineSubViewOptions';

/**
 * Create a sub view for a D3LineView. Adds the 
 *    line plot SVG structure for a line plot.
 * 
 * @class D3LineSubView
 * @extends D3BaseSubView
 * @author Brandon Clayton 
 */
export class D3LineSubView extends D3BaseSubView {

  /**
   * Create a new sub view for D3LineView
   * 
   * @param containerEl Container element to append sub view
   * @param options The sub view options
   */
  constructor(containerEl: HTMLElement, options: D3LineSubViewOptions);

  /** Line plot SVG elements */
  svg: D3LineSubViewSVGElements;

  /** Sub view options for line plot */
  options: D3LineSubViewOptions;

}

/**
 * @fileoverview Container class for the D3LineSubView SVG elements
 * 
 * @class D3LineSubViewSVGElements
 * @extends D3BaseSubViewSVGElements
 * @author Brandon Clayton
 */
export class D3LineSubViewSVGElements extends D3BaseSubViewSVGElements {

  protected constructor();

  /** The data group element */
  dataContainerEl: SVGElement;
  
  /** The grid lines group element */
  gridLinesEl: SVGElement;
  
  /** The legend group element*/
  legendEl: SVGElement;
  
  /** The legend foreign object element */
  legendForeignObjectEl: SVGElement;
  
  /**  The table element*/
  legendTableEl: SVGElement;
  
  /** The X axis group element */
  xAxisEl: SVGElement;
  
  /** The X axis grid lines group element */
  xGridLinesEl: SVGElement;
  
  /** The X label text element */
  xLabelEl: SVGElement;
  
  /** The X axis tick marks group element */
  xTickMarksEl: SVGElement;
  
  /** The Y axis group element */
  yAxisEl: SVGElement;
  
  /** The Y axis grid lines group element */
  yGridLinesEl: SVGElement;
  
  /** The Y label text element */
  yLabelEl: SVGElement;
  
  /** The Y axis tick marks group element */
  yTickMarksEl: SVGElement;

  /**
   * @override
   * Check the elements.
   * 
   * @returns The elements
   */
  checkElements(): D3LineSubViewSVGElements;

}
