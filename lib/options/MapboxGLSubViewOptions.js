import { Preconditions, NshmpError } from '@nshmp/nshmp-web-utils';

import { D3BaseSubViewOptions } from './D3BaseSubViewOptions';
import { D3BaseSubViewOptionsBuilder } from './D3BaseSubViewOptions';
import { MapType } from '../plot';

/**
 * Mapbox GL sub view options.
 *
 * @extends D3BaseSubViewOptions
 */
export class MapboxGLSubViewOptions extends D3BaseSubViewOptions {

  /**
   * @param {MapboxGLSubViewOptionsBuilder} builder The builder
   */
  constructor(builder) {
    /**
     * The initial map center.
     * Default: [-95.35, 39.50]
     * @type {number[]}
     */
    this.mapCenter = builder.mapCenter;

    /**
     * The initial map zoom.
     * Default: 3
     * @type {number}
     */
    this.mapZoom = builder.mapZoom;

    /**
     * The max map zoom (0, 24).
     * Default: 22
     * @type {number}
     */
    this.maxMapZoom = builder.maxMapZoom;

    /**
     * The min map zoom (0, 24).
     * Default: 0
     * @type {number}
     */
    this.minMapZoom = builder.minMapZoom;

    /**
     * Whether to show the legend.
     * Default: true
     * @type {boolean}
     */
    this.showLegend = builder.showLegend;

    /**
     * The initial map style.
     * Default: MapType.LIGHT
     * @type {MapType}
     */
    this.mapStyle = builder._mapStyle;
  }

  static builder() {
    return new MapboxGLSubViewOptionsBuilder();
  }

  static withDefaults() {
    return this.builder().build();
  }

}

/**
 * Mapbox GL sub view option builder.
 *
 * @extends D3BaseSubViewOptionsBuilder
 */
export class MapboxGLSubViewOptionsBuilder extends D3BaseSubViewOptionsBuilder {

  constructor() {
    this._mapCenter = [-95.35, 39.50];
    this._mapZoom = 3;
    this._maxMapZomm = 22;
    this._minMapZoom = 0;
    this._showlegend = true;
    this._mapStyle = MapType.LIGHT;
  }

  /**
   * Update the initial map center.
   * Default:
   *  [-95.35, 39.50]
   *
   * @param {number[]} center The initial map center
   */
  mapCenter(center) {
    Preconditions.checkArgumentArray(center);
    Preconditions.checkArgumentArrayLength(center, 2);
    this._mapCenter = center;
    return this;
  }

  /**
   * Update the initial map zoom.
   * Default:
   *    3
   *
   * @param {number} zoom The initial map zoom
   */
  mapZoom(zoom) {
    Preconditions.checkArgumentNumber(zoom);
    this._mapZoom = zoom;
    return this;
  }

  /**
   * Update the max map zoom (0, 24).
   * Default:
   *  22
   *
   * @param {number} zoom The max map zoom
   */
  maxMapZoom(zoom) {
    Preconditions.checkArgumentNumber(zoom);
    if (zoom < 0 || zoom > 24) {
      NshmpError.throwError(`Max zoom [${zoom}] out of range (0, 24)`);
    }
    this._maxMapZomm = zoom;
    return this;
  }

  /**
   * Update the min map zoom (0, 24).
   * Default:
   *  0
   *
   * @param {number} zoom The min map zoom
   */
  minMapZoom(zoom) {
    Preconditions.checkArgumentNumber(zoom);
    if (zoom < 0 || zoom > 24) {
      NshmpError.throwError(`Min zoom [${zoom}] out of range (0, 24)`);
    }
    this._maxMinZomm = zoom;
    return this;
  }

  /**
   * Whether to show the legend.
   * Default:
   *    true
   *
   * @param {boolean} showLegend Show legend
   */
  showLegend(showLegend) {
    Preconditions.checkArgumentBoolean(showLegend);
    this._showlegend = showLegend;
    return this;
  }

  /**
   * The initial map style.
   * Default:
   *    MapType.LIGHT
   *
   * @param {MapStyle} style The map style
   */
  mapStyle(style) {
    Preconditions.checkArgumentTypeOf(style, MapType);
    this._mapStyle = style;
    return this;
  }

  /**
   * Returns new MapboxGLSubViewOptions
   */
  build() {
    return new MapboxGLSubViewOptions(this);
  }

}
