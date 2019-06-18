import {
  D3BaseSubView,
  D3BaseSubViewSVGElements,
  D3BaseSubViewOptions,
  MapboxGLSubViewOptions } from '../../lib';

/**
 * @extends D3BaseSubView
 */
export class MapboxGLSubView extends D3BaseSubView {

  constructor(containerEl: HTMLElement, options: MapboxGLSubViewOptions);

  svg: MapboxGLSVGElements;

  options: MapboxGLSubViewOptions;

  _createSVGStructure(): MapboxGLSVGElements;
}

/**
 * @extends D3BaseSubViewSVGElements
 */
export class MapboxGLSVGElements extends D3BaseSubViewSVGElements {

  constructor();

  mapEl: HTMLElement;

  foreignObjectEl: SVGForeignObjectElement;

  mapSelectorEl: HTMLElement;

  mapListEl: HTMLElement;

  checkElements(): MapboxGLSVGElements;
}
