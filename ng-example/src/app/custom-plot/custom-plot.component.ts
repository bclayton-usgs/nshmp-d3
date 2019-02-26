import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import {
  D3LineSubViewOptions,
  D3LineView,
  D3LineData,
  D3LineOptions,
  D3LinePlot,
  D3LineSubView,
  D3LineViewOptions
 } from '@nshmp/nshmp-d3';

@Component({
  selector: 'app-custom-plot',
  templateUrl: './custom-plot.component.html',
  styleUrls: ['./custom-plot.component.scss']
})
export class CustomPlotComponent implements OnInit {

  @ViewChild('plot') plotEl: ElementRef;

  constructor() { }

  ngOnInit() {
    /* Create the line view */
    const lineView = this.createLineView(this.plotEl.nativeElement);

    /* Set the plot title */
    lineView.setTitle('Custom Line Plot');

    /* Create the line plot */
    const linePlot = new D3LinePlot(lineView);

    /* Plot the data in the upper sub view */
    const upperSubViewData = this.plotUpperSubView(linePlot, lineView);

    /* Plot the data in the lower sub view */
    const lowerSubViewData = this.plotLowerSubView(linePlot, lineView);

    /* Set the data that will be saved */
    lineView.setSaveData(upperSubViewData, lowerSubViewData);

    /* Create a data table in the 'Data' view */
    lineView.createDataTable(upperSubViewData, lowerSubViewData);

    /* Create metadata to be shown in the 'Metadata' view */
    const metadata = new Map();
    metadata.set('This is some metadata', ['Some value', 'Another value']);

    /* Set the metadata */
    lineView.setMetadata(metadata);

    /* Create the metadata table */
    lineView.createMetadataTable();
  }

  /**
   * Create the view.
   *
   * @param containerEl The container element
   */
  createLineView(containerEl: HTMLElement): D3LineView {
    /* Create the lower sub view options */
    const lowerSubViewOptions = D3LineSubViewOptions.lowerBuilder()
        .xLabel('X')
        .yLabel('Y')
        .filename('lower-line-plot')
        .build();

    /* Create the upper sub view options */
    const upperSubViewOptions = D3LineSubViewOptions.upperBuilder()
        .xLabel('X')
        .yLabel('Y')
        .filename('upper-line-plot')
        .build();

    /* View options */
    const viewOptions = D3LineViewOptions.builder()
        .viewSize('minCenter')
        .build();

    /* Create the line view */
    const lineView = D3LineView.builder()
        .addLowerSubView(true)
        .containerEl(containerEl)
        .lowerSubViewOptions(lowerSubViewOptions)
        .upperSubViewOptions(upperSubViewOptions)
        .viewOptions(viewOptions)
        .build();

    return lineView;
  }

  /**
   * Create the data with custom line options for the lower sub view plot.
   *
   * @param lowerSubView The lower sub view
   */
  createLowerSubViewData(lowerSubView: D3LineSubView): D3LineData {
    /* Create data for the lower sub view */
    const data = D3LineData.builder()
        .subView(lowerSubView)
        .data([ 0, 2, 4, 6 ], [ -5, 2, -1, 8 ])
        .data([ 0, 2, 4, 6 ], [ 5, -4, 8, -2 ])
        .build();

    return data;
  }

  /**
   * Create the data with custom line options for the upper sub view plot.
   *
   * @param upperSubView The upper sub view
   */
  createUpperSubViewData(upperSubView: D3LineSubView): D3LineData {
    /**
     * Create custom line options with:
     *    - Star markers
     *    - Black marker edges
     *    - Marker size of 12
     */
    const lineOptions1 = D3LineOptions.builder()
        .label('Custom Line 1')
        .markerStyle('*')
        .markerEdgeColor('black')
        .markerSize(12)
        .build();

    /**
     * Create custom line options with:
     *    - Dashed line style
     *    - Square markers
     */
    const lineOptions2 = D3LineOptions.builder()
        .label('Custom Line 2')
        .lineStyle('--')
        .markerStyle('s')
        .build();

    /**
     * Create custom line options with:
     *    - Dotted line style
     *    - Cross markers
     */
    const lineOptions3 = D3LineOptions.builder()
        .label('Custom Line 3')
        .lineStyle(':')
        .markerStyle('x')
        .build();

    /* Create data for the upper sub view */
    const data = D3LineData.builder()
        .subView(upperSubView)
        .data([ 2, 4, 6, 8 ], [ 4, 9, 25, 15 ], lineOptions1)
        .data([ 2, 4, 6, 8 ], [ 5, 10, 8, 3 ], lineOptions2)
        .data([ 2, 4, 6, 8 ], [ 2, 12, 15, 5 ], lineOptions3)
        .build();

    return data;
  }

  /**
   * Plot some data.
   *
   * @param linePlot
   * @param lineView The view
   */
  plotLowerSubView(linePlot: D3LinePlot, lineView: D3LineView): D3LineData {
    /* Get the lower sub view */
    const subView = lineView.lowerSubView;

    /* Create the data to plot */
    const data = this.createLowerSubViewData(subView);

    /* Plot the data */
    linePlot.plot(data);

    /* Plot a reference line at y=0 */
    linePlot.plotZeroRefLine(subView);

    return data;
  }

  /**
   * Plot some data.
   *
   * @param linePlot
   * @param lineView The view
   */
  plotUpperSubView(linePlot: D3LinePlot, lineView: D3LineView): D3LineData {
    /* Get the upper sub view */
    const subView = lineView.upperSubView;

    /* Create the data to plot */
    const data = this.createUpperSubViewData(subView);

    /* Plot the data */
    linePlot.plot(data);

    /* Add a reference line at y=5 */
    const yRef = 5;
    const refLineEl = linePlot.plotHorizontalRefLine(subView, yRef);

    /* Add text above reference line */
    const textEl = linePlot.addText(
        subView,
        4,
        yRef + 0.5,
        `This line is draggable: y=${yRef}`);

    /* Y limits for a dragging the reference line */
    const yLimits = [ 4, 20 ];

    /**
     * Make the reference line draggable.
     * This method takes an optional callback function that is
     *    called when the line is dragged with arguments:
     *        - Number: the current Y value
     *        - D3LineSeriesData: the line series data
     *        - SVGElement: the element being dragged
     */
    linePlot.makeDraggableInY(subView, refLineEl, yLimits, (y) => {
      /* Move the text as the line drags */
      linePlot.moveText(subView, 4, y + 0.5, textEl);

      /* Update the text as the line drags */
      linePlot.updateText(textEl, `This line is draggable: y=${y}`);
    });

    return data;
  }
}
