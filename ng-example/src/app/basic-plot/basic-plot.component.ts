import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import {
  D3LineView,
  D3LinePlot,
  D3LineData,
  D3LineSubView,
  D3LineSubViewOptions,
  D3LineViewOptions
 } from '@nshmp/nshmp-d3';

@Component({
  selector: 'app-basic-plot',
  templateUrl: './basic-plot.component.html',
  styleUrls: ['./basic-plot.component.scss']
})
export class BasicPlotComponent implements OnInit {

  @ViewChild('plot') plotEl: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit() {
    /* Create the line view */
    const lineView = this.createLineView(this.plotEl.nativeElement);

    /* Set the plot title */
    lineView.setTitle('Basic Line Plot');

    /* Get sub view to plot in */
    const upperSubView = lineView.upperSubView;

    /* Plot */
    this.plot(lineView, upperSubView);
  }

  /**
   * Create the view.
   *
   * @param containerEl The container element
   */
  createLineView(containerEl: HTMLElement) {
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
        .containerEl(containerEl)
        .upperSubViewOptions(upperSubViewOptions)
        .viewOptions(viewOptions)
        .build();

    return lineView;
  }

  /**
   * Plot some data.
   *
   * @param lineView The view
   * @param subView The sub view
   */
  plot(lineView: D3LineView, subView: D3LineSubView) {
    /* Create a new line plot */
    const linePlot = new D3LinePlot(lineView);

    /* Create the data to plot */
    const data = D3LineData.builder()
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
    const metadata = new Map();
    metadata.set('This is some metadata', ['Some value', 'Another value']);

    /* Set the metadata */
    lineView.setMetadata(metadata);

    /* Create the metadata table */
    lineView.createMetadataTable();
  }

}
