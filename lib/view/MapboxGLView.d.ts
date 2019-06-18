import {
  D3BaseView,
  D3BaseViewBuilder,
  D3BaseSubViewOptions,
  D3BaseViewOptions,
  MapboxGLSubView,
  D3BaseSubView,
  MapboxGLSubViewOptions } from '../../lib';

/**
 * @extends D3BaseView
 */
export class MapboxGLView extends D3BaseView {

  constructor(builder: MapboxGLViewBuilder);

  static builder(): MapboxGLViewBuilder;

  upperSubView: MapboxGLSubView;

  lowerSubView: MapboxGLSubView;

  _createSubView(el: HTMLElement, options: D3BaseSubViewOptions): MapboxGLSubView;
}

/**
 * @extends D3BaseViewBuilder
 */
export class MapboxGLViewBuilder extends D3BaseViewBuilder {

  constructor();

  build(): MapboxGLView;

  addGridLinetoggle(bool: boolean): MapboxGLViewBuilder;

  addLegendToggle(bool: boolean): MapboxGLViewBuilder;

  addLowerSubView(bool: boolean): MapboxGLViewBuilder;

  containerEl(el: HTMLElement): MapboxGLViewBuilder;

  lowerSubViewOptions(options: MapboxGLSubViewOptions): MapboxGLViewBuilder;

  upperSubViewOptions(options: MapboxGLSubViewOptions): MapboxGLViewBuilder;

  viewOptions(options: D3BaseViewOptions): MapboxGLViewBuilder;

}
