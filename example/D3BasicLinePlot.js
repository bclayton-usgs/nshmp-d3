
const { D3LineView } = require('d3/view/D3LineView');
const D3LinePlot = require('d3/D3LinePlot');
const { D3LineData } = require('d3/data/D3LineData');
const { D3LineSubView } = require('d3/view/D3LineSubView');
const { D3LineSubViewOptions } = require('d3/options/D3LineSubViewOptions');

/**
 * @fileoverview This is an example of plotting a simple
 *    line graph using the d3 package.
 * 
 * @class D3BasicLinePlot
 * @author Brandon Clayton
 */
class D3BasicLinePlot {

  constructor() {
    /* Container for plot(s) */
    let containerEl = document.querySelector('#content');

    /* Create the line view */
    let lineView = this.createLineView(containerEl);

    /* Set the plot title */
    lineView.setTitle('Simple Line Plot');

    /* Get the sub view that will have the plot on it */
    let upperSubView = lineView.upperSubView;

    /* Plot the data */
    this.plot(lineView, upperSubView);
  }

  /**
   * Create the view.
   * 
   * @param {HTMLElement} containerEl The container element
   */
  createLineView(containerEl) {
    /* Create the upper sub view options */
    let upperSubViewOptions = D3LineSubViewOptions.upperBuilder()
        .xLabel('X')
        .yLabel('Y')
        .filename('upper-line-plot')
        .build();

    /* Create the line view */
    let lineView = D3LineView.builder()
        .containerEl(containerEl)
        .upperSubViewOptions(upperSubViewOptions)
        .build();

    return lineView;
  }

  /**
   * Plot some data.
   * 
   * @param {D3LineView} lineView The view
   * @param {D3LineSubView} subView The sub view 
   */
  plot(lineView, subView) {
    /* Create a new line plot */
    let linePlot = new D3LinePlot(lineView);

    /* Create the data to plot */
    let data = D3LineData.builder()
        .subView(subView)
        .data([ 2, 4, 6, 8 ], [ 4, 9, 25, 15 ])
        .data([ 2, 4, 6, 8 ], [ 5, 10, 8, 3 ])
        .data([ 2, 4, 6, 8 ], [ 2, 12, 15, 5 ])
        .build();

    /* Plot the data */
    linePlot.plot(data);

    /* Set the data that will be saved */
    lineView.setSaveData(data);

    /* Create a data table in the 'Data' view */
    lineView.createDataTable(data);
   
    /* Create metadata to be shown in the 'Metadata' view */
    let metadata = new Map();
    metadata.set('This is some metadata', ['Some value', 'Another value']);

    /* Set the metadata */
    lineView.setMetadata(metadata);

    /* Create the metadata table */
    lineView.createMetadataTable();
  }

}

new D3BasicLinePlot();
