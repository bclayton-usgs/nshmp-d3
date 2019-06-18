import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapboxGLPlot, MapboxGLView, D3BaseSubViewOptions  } from '@nshmp/nshmp-d3';
import { map } from 'rxjs/operators';
import * as d3 from 'd3';
import { Observable, Subscription } from 'rxjs';
import { FeatureCollection, Feature, Geometry } from 'geojson';

@Component({
  selector: 'app-basic-map-plot',
  templateUrl: './basic-map-plot.component.html',
  styleUrls: ['./basic-map-plot.component.sass']
})
export class BasicMapPlotComponent implements OnInit, OnDestroy {

  @ViewChild('plot') plotEl: ElementRef<HTMLElement>;

  mapPlot: MapboxGLPlot;

  fcSubscription: Subscription;

  property = 'aGrid';

  agridUrl = 'https://raw.githubusercontent.com/bclayton-usgs/nshm-cous-2018/master/' +
      'Western%20US/Grid/sources/ext-fixed-ch.csv';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const view = MapboxGLView.builder()
        .containerEl(this.plotEl.nativeElement)
        .build();

    this.mapPlot = new MapboxGLPlot(view);

    this.fcSubscription = this.getDataFeatureCollection().subscribe(fc => {
      this.mapPlot.plotMap(fc, this.property);
    });

  }

  ngOnDestroy() {
    this.fcSubscription.unsubscribe();
  }

  getDataFeatureCollection(): Observable<FeatureCollection<Geometry>> {
    return this.getData().pipe(map(result => {
      return this.toFeatureCollection(result);
    }));
  }

  private getData(): Observable<d3.DSVRowArray<string>> {
    return this.http.get(this.agridUrl, {responseType: 'text'})
        .pipe(map(result => d3.csvParse(result)));
  }

  private toFeatureCollection(result: d3.DSVRowArray<string>): FeatureCollection {
    const features: Feature[] = result.map(loc => {
      const feature: Feature = {
        type: 'Feature',
        properties: {
          latitude: +loc.lat,
          longitude: +loc.lon,
          type: loc.type,
          mMax: +loc.mMax,
          aGrid: +loc.a
        },
        geometry: {
          type: 'Point',
          coordinates: [+loc.lon, +loc.lat]
        }
      };

      return feature;
    });


    const featureCollection: FeatureCollection = {
      type: 'FeatureCollection',
      features
    };

    return featureCollection;
  }

}
