/* D3LineLegend type definitions */

import d3 from 'd3';

import { D3LineData } from '../data/D3LineData';
import { D3LinePlot } from '../D3LinePlot';
import { D3LineSubView } from '../view/D3LineSubView';

/**
 * Create a legend for a D3LinePlot.
 * 
 * @class D3LineLegend
 * @author Brandon Clayton
 */
export class D3LineLegend {

  /**
   * New instance of D3LineLegend
   *  
   * @param linePlot The line plot 
   */
  constructor(linePlot: D3LinePlot);
  
  /** The line plot */
  linePlot: D3LinePlot;

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
   * Hide legend on all sub views.
   */
  hideAll(): void;

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

  /**
   * Sync upper and lower sub views.
   */
  syncSubViews(): void;

}
