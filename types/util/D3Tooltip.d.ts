/* D3Tooltip type definitions */

import { D3BaseSubView } from './view/D3BaseSubView';

/**
 * Create a tooltip on a D3BaseSubView.
 * 
 * The tooltip is placed automatically to fit in the plot window
 *    so it will not go past the edge of the plot.
 * 
 * @class D3Tooltip
 * @author Brandon Clayton
 */
export class D3Tooltip {

  constructor();

  /**
   * Create a tooltip on a sub view at a desired X and Y coordinate.
   * 
   * @param subView The sub view to place the tooltip 
   * @param tooltipText The array of text to display
   * @param tooltipX The X coordinate in plot units to place the tooltip
   * @param tooltipY The Y coordinate in plot units to place the tooltip
   */
  create(subView: D3BaseSubView, tooltipText: string[], tooltipX: number, tooltipY: number): void;

  /**
   * Remove any tooltip from a sub view
   *  
   * @param subView The sub view to remove the tooltip
   */
  remove(subView: D3BaseSubView): void;

}
