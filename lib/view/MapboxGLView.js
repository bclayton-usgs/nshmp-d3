import { Preconditions } from '@nshmp/nshmp-web-utils';

import { D3BaseView, D3BaseViewBuilder } from './D3BaseView';
import { D3BaseSubViewOptions, D3BaseViewOptions } from '../options';
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
    this.lowerSubViewl;
  }

  static builder() {
    return new MapboxGLViewBuilder();
  }

  /**
   *
   * @param {HTMLElement} el The el
   * @param {D3BaseSubViewOptions} options Sub view options
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

}
