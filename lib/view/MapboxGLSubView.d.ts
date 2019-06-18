import {
  D3BaseSubView,
  D3BaseSubViewSVGElements,
  D3BaseSubViewOptions} from '../../lib';

/**
 * @extends D3BaseSubView
 */
export class MapboxGLSubView extends D3BaseSubView {

  constructor(containerEl: HTMLElement, options: D3BaseSubViewOptions);

  svg: MapboxGLSVGElements;

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
