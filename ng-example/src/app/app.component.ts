import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import {
  D3LineView,
  D3LinePlot,
  D3LineData,
  D3LineSubView,
  D3LineSubViewOptions
 } from '@nshmp/nshmp-d3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nshmp-ng-d3-test';

  @ViewChild('content') containerEl: ElementRef<HTMLElement>;

  ngOnInit() {
    const lineView = this.createLineView(this.containerEl.nativeElement);

    const upperSubView = lineView.upperSubView;

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

    /* Create the line view */
    const lineView = D3LineView.builder()
        .containerEl(containerEl)
        .upperSubViewOptions(upperSubViewOptions)
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
