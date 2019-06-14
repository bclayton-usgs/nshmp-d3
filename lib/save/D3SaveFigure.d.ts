/* D3SaveFigure type definitions */

import {
  D3BaseSubView,
  D3BaseView,
  D3SaveFigureOptions } from '../../lib';

/**
 * Preview and/or save a view's figures to:
 *    - JPEG
 *    - PNG
 *    - SVG
 * 
 * Use D3SaveFigure.save, D3SaveFigure.saveImageOnly, 
 *    D3SaveFigure.preview, and D3SaveFigure.previewImageOnly
 *    to save and preview the figures. 
 * 
 * @class D3SaveFigure
 * @author Brandon Clayton
 */
export class D3SaveFigure {

  /**
   * @private
   * Use either:
   *    - D3SaveFigure.save
   *    - D3SaveFigure.preview
   *  
   * @param view The view
   * @param subView The sub view
   * @param format The save format: 'jpeg' || 'png' || 'svg'
   * @param saveFigure Whether to save the figure
   * @param imageOnly Whether to save or preview just the image (page size is image size)
   */
  private constructor(
      view: D3BaseView,
      subView: D3BaseSubView,
      format: string,
      saveFigure: boolean,
      imageOnly: boolean);

  view: D3BaseView;

  subView: D3BaseSubView;
  
  imageOnly: boolean;
  
  saveFormat: string;
  
  options: D3SaveFigureOptions;
  
  filename: string;

  baseDPI: number;
  
  printDPI: number;

  pageHeightPxPrintDPI: number;
  
  pageWidthPxPrintDPI: number;
  
  pageHeightPxBaseDPI: number;
  
  pageWidthPxBaseDPI: number;
  
  svgEl: SVGElement;
  
  svgOuterPlotEl: SVGElement;
  
  svgOuterPlotFrameEl: SVGElement;
  
  svgInnerPlotEl: SVGElement;
  
  svgInnerPlotFrameEl: SVGElement;

  footerHeightInch: number;

  iFrameEl: HTMLIFrameElement;
    
  /**
   * Preview a view's figures in a new window with a metadata table and a
   *    footer with a date and the URL.
   * 
   * @param view The view with the plot to preview
   * @param previewFormat The preview format: 'jpeg' || 'png' || 'svg'
   */
  static preview(view: D3BaseView, previewFormat: string): D3SaveFigure;

  /**
   * Preview a view's figures in a new window as just the images.
   * 
   * @param view The view with the plot to preview
   * @param previewFormat The preview format: 'jpeg' || 'png' || 'svg'
   */
  static previewImageOnly(view: D3BaseView, previewFormat: string): D3SaveFigure;

  /**
   * Save a view's figures in a specific format with a metadata table
   *    and a footer with the date and the URL.
   * 
   * @param view The view with the plots
   * @param saveFormat The save format: 'jpeg' || 'png' || 'svg'
   */
  static save(view: D3BaseView, saveFormat: string): D3SaveFigure;

  /**
   * Save a view's figures in a specific format as just the images.
   * 
   * @param view The view with the plots
   * @param saveFormat The save format: 'jpeg' || 'png' || 'svg'
   */
  static saveImageOnly(view: D3BaseView, saveFormat: string): D3SaveFigure;

}
