/* D3LineLegend type definitions */

import {
  D3LineData,
  D3LineSubView, 
  D3LineView} from '../../lib';

/**
 * Create a legend for a D3LinePlot.
 * 
 * @class D3LineLegend
 * @author Brandon Clayton
 */
export class D3LineLegend {

  /**
   * New instance of D3LineLegend
   */
  constructor(view: D3LineView);
  
  /** The line view */
  view: D3LineView;

  /**
   * Create a legend on a sub view.
   * 
   * @param lineData The line data to show in the legend
   */
  create(lineData: D3LineData): void;

  /**
   * Hide the legend for specific sub view.
   * 
   * @param subView The sub view 
   */
  hide(subView: D3LineSubView): void;

  /**
   * Remove the legend from the sub view.
   * 
   * @param subView The sub view
   */
  remove(subView: D3LineSubView): void;

  /**
   * Highlight a legend entry given an id of the line,
   *    D3LineSeries.lineOptions.id, by increasing the line width, 
   *    marker size, and marker edge size based on 
   *    D3LineSeries.lineOptions.selectionMultiplier.
   * 
   * @param id The id of the line series
   * @param lineDatas The line datas
   */
  selectLegendEntry(id: string, ...lineDatas: D3LineData[]): void;

  /**
   * Show the legend on specific sub view.
   * 
   * @param subView The sub view 
   */
  show(subView: D3LineSubView): void;

  /**
   * Show legends on all sub views.
   */
  showAll(): void;

}
