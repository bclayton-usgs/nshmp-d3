import * as d3 from 'd3';

import { D3BaseSubView, D3BaseSubViewSVGElements } from './D3BaseSubView';
import { MapboxGLSubViewOptions } from '../options';

/**
 * @extends D3BaseSubView
 */
export class MapboxGLSubView extends D3BaseSubView {

  /**
   *
   * @param {HTMLElement} containerEl The el
   * @param {MapboxGLSubViewOptions} options The options
   */
  constructor(containerEl, options) {
    super(containerEl, options);

    this._xlmns = 'http://www.w3.org/1999/xhtml';

    /** @type {MapboxGLSubViewOptions} */
    this.options;

    /** @type {MapboxGLSVGElements} */
    this.svg;
  }

  _createMapMenu(foreignObjectEl) {
    const mapSelectorD3 = d3.select(foreignObjectEl)
        .append('xhtml:div')
        .attr('xmlns', 'http://www.w3.org/1999/xhtml')
        .style('position', 'absolute')
        .attr('class', 'dropdown')

    mapSelectorD3.append('button')
        .attr('class', 'btn btn-lg btn-default dropdown-toggle')
        .attr('id', 'map-menu')
        .attr('data-toggle', 'dropdown')
        .attr('aria-hashpop', true)
        .attr('aria-expanded', true)
        .style('margin', '5px 0 0 5px')
        .append('span')
        .attr('class', 'glyphicon glyphicon-road');

    let mapListD3 = mapSelectorD3.append('ul')
        .attr('class', 'dropdown-menu')
        .attr('aria-labelledby', 'map-menu')
        .style('font-weight', 'normal')
        .style('padding', '5px')
        .style('font-size', '12px')
        .style('cursor', 'pointer');

    mapListD3.selectAll('li')
        .data(this._saveMenuButtons())
        .enter()
        .append('li')
        .html(d => `<a value=${d.type}>${d.label}</a>`);

    return {
      mapListEl: mapListD3.node(),
      mapSelectorEl: mapSelectorD3.node()
    };
  }

  _saveMenuButtons() {
    const buttons = [
      { label: 'Greyscale', type: 'LIGHT' },
      { label: 'Dark', type: 'DARK' },
      { label: 'Satellite', type: 'SATELLITE' },
      { label: 'Street', type: 'STREET' },
      { label: 'Outdoors', type: 'OUTDOORS' },
    ];

    return buttons;
  }

  _createLegend(foreignObjectEl) {
    d3.select(foreignObjectEl)
      .append('xhtml:div')
      .attr('xmlns', this._xlmns)
      .style('width', '20%')
      .style('height', '20px')
      .style('position', 'absolute')
      .style('top', '90%')
      .style('background-color', 'white');
  }

  _createSVGStructure() {
    const els = super._createSVGStructure();

    const foreignObjectD3 = d3.select(els.svgEl)
        .append('foreignObject')
        .style('height', '100%')
        .style('width', '100%');

    const mapD3 = foreignObjectD3.append('xhtml:div')
        .attr('xmlns', this._xlmns)
        .style('position', 'absolute')
        .style('bottom', 0)
        .style('left', 0)
        .style('right', 0)
        .style('top', 0);

    const mapMenuEls = this._createMapMenu(foreignObjectD3.node());

    /* Legend */
    const legendD3 = foreignObjectD3.append('xhtml:div');
    const legendTableD3 = legendD3.append('table')
        .attr('xlmns', this._xlmns);

    const mapEls = new MapboxGLSVGElements();
    mapEls.foreignObjectEl = foreignObjectD3.node();
    mapEls.innerFrameEl = els.innerFrameEl;
    mapEls.innerPlotEl = els.innerPlotEl;
    mapEls.mapEl = mapD3.node();
    mapEls.outerFrameEl = els.outerFrameEl;
    mapEls.outerPlotEl = els.outerPlotEl;
    mapEls.svgEl = els.svgEl;
    mapEls.mapListEl = mapMenuEls.mapListEl;
    mapEls.mapSelectorEl = mapMenuEls.mapSelectorEl;
    mapEls.legendEl = legendD3.node();
    mapEls.legendTableEl = legendTableD3.node();

    return mapEls;
  }

}

/**
 * @extends D3BaseSubViewSVGElements
 */
export class MapboxGLSVGElements extends D3BaseSubViewSVGElements {

  constructor() {
    super();

    /** @type {HTMLElement} */
    this.mapEl = undefined;

    /** @type {SVGForeignObjectElement} */
    this.foreignObjectEl = undefined;

    /** @type {HTMLElement} */
    this.legendEl = undefined;

    /** @type {HTMLElement} */
    this.legendTableEl = undefined;

    /** @type {HTMLElement} */
    this.mapSelectorEl = undefined;

    /** @type {HTMLElement} */
    this.mapListEl = undefined;
  }

  checkElements() {
    super.checkElements();
    return this;
  }
}
