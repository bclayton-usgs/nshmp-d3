import {
  D3BaseSubViewOptions,
  D3BaseSubViewOptionsBuilder,
  D3SaveFigureOptions,
  D3TooltipOptions,
  MapType
} from '../../lib';

/**
 * Mapbox GL sub view options.
 *
 * @extends D3BaseSubViewOptions
 */
export class MapboxGLSubViewOptions extends D3BaseSubViewOptions{

  protected constructor(builder: MapboxGLSubViewOptionsBuilder);

    /**
     * The initial map center.
     * Default: [-95.35, 39.50]
     */
    mapCenter: number[];

    /**
     * The initial map zoom.
     * Default: 3
     */
    mapZoom: number;

    /**
     * The max map zoom (0, 24).
     * Default: 22
     */
    maxMapZoom: number;

    /**
     * The min map zoom (0, 24).
     * Default: 0
     */
    minMapZoom: number;

    /**
     * Whether to show the legend.
     * Default: true
     */
    showLegend: boolean;

    /**
     * The initial map style.
     * Default: MapType.LIGHT
     */
    mapStyle: MapType;

    static builder(): MapboxGLSubViewOptionsBuilder;

    static withDefaults(): MapboxGLSubViewOptions;
}

/**
 * Mapbox GL sub view option builder.
 *
 * @extends D3BaseSubViewOptionsBuilder
 */
export class MapboxGLSubViewOptionsBuilder extends D3BaseSubViewOptionsBuilder {

  protected constructor();

  /**
   * Set the filename for downloading.
   * Default: 'file'
   *
   * @param name The filename
   */
  filename(name: string): MapboxGLSubViewOptionsBuilder;

  /**
   * Set the label for the sub view.
   * Default: ''
   *
   * @param label The label
   */
  label(label: string): MapboxGLSubViewOptionsBuilder;

  /**
   * Update the initial map center.
   * Default:
   *  [-95.35, 39.50]
   *
   * @param {number[]} center The initial map center
   */
  mapCenter(center: number[]): MapboxGLSubViewOptionsBuilder;

  /**
   * The initial map style.
   * Default:
   *    MapType.LIGHT
   *
   * @param {MapStyle} style The map style
   */
  mapStyle(style: MapType): MapboxGLSubViewOptionsBuilder;

  /**
   * Update the initial map zoom.
   * Default:
   *    3
   *
   * @param {number} zoom The initial map zoom
   */
  mapZoom(zoom: number): MapboxGLSubViewOptionsBuilder;

  /**
   * Update the max map zoom (0, 24).
   * Default:
   *  22
   *
   * @param {number} zoom The max map zoom
   */
  maxMapZoom(zoom: number): MapboxGLSubViewOptionsBuilder;

  /**
   * Update the min map zoom (0, 24).
   * Default:
   *  0
   *
   * @param {number} zoom The min map zoom
   */
  minMapZoom(zoo: number): MapboxGLSubViewOptionsBuilder;

  /**
   * Set the bottom margin for the SVG plot in px.
   * Default: 15
   *
   * @param margin The bottom margin
   */
  marginBottom(margin: number): MapboxGLSubViewOptionsBuilder;

  /**
   * Set the left margin for the SVG plot in px.
   * Default: 20
   *
   * @param margin The left margin
   */
  marginLeft(margin: number): MapboxGLSubViewOptionsBuilder;

  /**
   * Set the right margin for the SVG plot in px.
   * Default: 10
   *
   * @param margin The right margin
   */
  marginRight(margin: number): MapboxGLSubViewOptionsBuilder;

  /**
   * Set the top margin for the SVG plot in px.
   * Default: 10
   *
   * @param margin The top margin
   */
  marginTop(margin: number): MapboxGLSubViewOptionsBuilder;

  /**
   * Set the bottom padding for the SVG plot in px.
   * Default: 35
   *
   * @param margin The bottom margin
   */
  paddingBottom(padding: number): MapboxGLSubViewOptionsBuilder;

  /**
   * Set the left padding for the SVG plot in px.
   * Default: 40
   *
   * @param margin The left margin
   */
  paddingLeft(padding: number): MapboxGLSubViewOptionsBuilder;

  /**
   * Set the right padding for the SVG plot in px.
   * Default: 20
   *
   * @param margin The right margin
   */
  paddingRight(padding: number): MapboxGLSubViewOptionsBuilder;

  /**
   * Set the top padding for the SVG plot in px.
   * Default: 10
   *
   * @param margin The top margin
   */
  paddingTop(padding: number): MapboxGLSubViewOptionsBuilder;

  /**
   * Set the SVG plot height in px.
   * Default: 504 (upper) || 224 (lower)
   *
   * @param height The plot height
   */
  plotHeight(height: number): MapboxGLSubViewOptionsBuilder;

  /**
   * Set the SVG plot width in px.
   * Default: 896
   *
   * @param width The plot width
   */
  plotWidth(width: number): MapboxGLSubViewOptionsBuilder;

  /**
   * Set the save figure options.
   * Default: D3SaveFigureOptions.withDefaults()
   *
   * @param options The save figure options
   */
  saveFigureOptions(options: D3SaveFigureOptions): MapboxGLSubViewOptionsBuilder;

  /**
   * Whether to show the legend.
   * Default:
   *    true
   *
   * @param {boolean} showLegend Show legend
   */
  showLegend(showLegend: boolean): MapboxGLSubViewOptionsBuilder;

  /**
   * Returns new MapboxGLSubViewOptions
   */
  build(): MapboxGLSubViewOptions;

}
