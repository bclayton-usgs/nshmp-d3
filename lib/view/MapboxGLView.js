import { Preconditions } from '@nshmp/nshmp-web-utils';

import { D3BaseView, D3BaseViewBuilder } from './D3BaseView';
import {  MapboxGLSubViewOptions, D3BaseViewOptions } from '../options';
import { MapboxGLSubView } from './MapboxGLSubView';

/**
 * @extends D3BaseView
 */
export class MapboxGLView extends D3BaseView {

  /**
   *
   * @param {MapboxGLViewBuilder} builder The builder
   */
  constructor(builder) {
    super(builder);

    /** @type {MapboxGLSubView} */
    this.upperSubView;

    /** @type {MapboxGLSubView} */
    this.lowerSubView;
  }

  static builder() {
    return new MapboxGLViewBuilder();
  }

  /**
   *
   * @param {HTMLElement} el The el
   * @param {MapboxGLSubViewOptions} options Sub view options
   */
  _createSubView(el, options) {
    return new MapboxGLSubView(el, options);
  }

}

/**
 * @extends D3BaseViewBuilder
 */
export class MapboxGLViewBuilder extends D3BaseViewBuilder {

  constructor() {
    super();
  }

  build() {
    Preconditions.checkNotUndefined(
        this._containerEl,
        'Container element not set');
    return new MapboxGLView(this);
  }

  _setDefaultViewOptions() {
    /** @type {D3BaseViewOptions} */
    this._viewOptions = D3BaseViewOptions.withDefaults();

    /** @type {MapboxGLSubViewOptions} */
    this._upperSubViewOptions = MapboxGLSubViewOptions.withDefaults();

    /** @type {MapboxGLSubViewOptions} */
    this._lowerSubViewOptions = MapboxGLSubViewOptions.withDefaults();
  }

}
