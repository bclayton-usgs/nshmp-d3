import { NshmpError, Preconditions } from '@nshmp/nshmp-web-utils';
import * as d3 from 'd3';
import * as mapboxGL from 'mapbox-gl';
import { FeatureCollection } from 'geojson';

import { MapboxGLView, MapboxGLSubView } from '../view';

export class MapboxGLPlot {

  view: MapboxGLView;

  private accessToken: string = 'pk.eyJ1IjoiYmNsYXl0b24iLCJhIjoiY2pmbWxmd3BhMHg1eTJ' +
        '4bzR3M2Q3ZTM5YyJ9.lCQ8B6C9xhpZmd8BrukbDw';

  private map: mapboxGL.Map;

  private fc: FeatureCollection = {type: 'FeatureCollection', features: []};

  private property = '';

  private readonly MAP_ID = 'mapbox-gl-plot';

  private onStyleLoadPrev = () => {};

  constructor(view: MapboxGLView) {
    this.view = view;
    (mapboxGL as typeof mapboxGL).accessToken = this.accessToken;

    this.map = new mapboxGL.Map({
      container: this.view.upperSubView.svg.mapEl,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [-98.35, 39.50],
      zoom: 3
    });

    view.upperSubView.svg.mapListEl.addEventListener('click', (event: MouseEvent) => {
      this.changeMapType(event);
    });
  }

  plotMap(fc: FeatureCollection, property: string) {
    this.map.on('load', () => {
      this.updatePlot(fc, property);
    });
  }

  private updatePlot(fc: FeatureCollection, property: string): void {
    this.fc = fc;
    this.property = property;

    if (this.map.getLayer(this.MAP_ID)) {
      this.map.removeLayer(this.MAP_ID);
      this.map.removeSource(this.MAP_ID);
    }

    const values = this.getPropertyValues(fc, property);
    const min = d3.min(values) as number;
    const max = d3.max(values) as number;
    const colorStops = this.colorStops(min, max);
    this.addGeoJsonLayer(fc, property, colorStops);
    this.fitBounds(fc);
  }

  private changeMapType(event: MouseEvent) {
    if (event.target instanceof Element) {
      const value = event.target.getAttribute('value') as string;
      const type = MapType[value as keyof typeof MapType];
      this.map.setStyle(type);

      if (this.fc.features.length > 0 && this.property) {
        const onStyleLoad = () => {
          this.updatePlot(this.fc, this.property);
        };

        this.map.off('style.load', this.onStyleLoadPrev);
        this.map.on('style.load', onStyleLoad);
        this.onStyleLoadPrev = onStyleLoad;
      }
    }
  }

  private getPropertyValues(fc: FeatureCollection, property: string): number[] {
    const values: number[] = fc.features.map(feature => {
      if (feature.properties === null) {
        NshmpError.throwError('Properties do not exist on features');
      } else if (feature.properties[property]) {
        return feature.properties[property];
      } else {
        NshmpError.throwError(`Property [${property}] does not exist`);
      }
    });

    return values;
  }

  private addGeoJsonLayer(
      fc: FeatureCollection,
      property: string,
      colorStops: (string | number)[][]): void {
    this.map.addLayer({
      id: this.MAP_ID,
      type: 'circle',
      source: {
        type: 'geojson',
        data: fc
      },
      paint: {
        'circle-radius': 3,
        'circle-color': {
          property,
          stops: colorStops
        }
      }
    });
  }

  private fitBounds(fc: FeatureCollection) {
    const bounds = new mapboxGL.LngLatBounds();

    fc.features.forEach((feature) => {
        bounds.extend((feature.geometry as any).coordinates);
    });

    this.map.fitBounds(bounds, {padding: 100});
  }

  private colorStops(min: number, max: number): (string | number)[][] {
    const points = 11;
    const colors = d3.schemeSpectral[points].slice();
    colors.reverse();
    const step = (max - min) / (points - 1);
    const range = d3.range(min, max + step, step);

    const stops: (string | number)[][] = [];

    range.forEach((x, i) => {
      stops.push([x, colors[i]]);
    });

    return stops;
  }

}

export enum MapType {
  STREET = 'mapbox://styles/mapbox/streets-v10',
  OUTDOORS = 'mapbox://styles/mapbox/outdoors-v10',
  LIGHT = 'mapbox://styles/mapbox/light-v9',
  DARK = 'mapbox://styles/mapbox/dark-v9',
  SATELLITE = 'mapbox://styles/mapbox/satellite-v9',
  SATELLITE_STREETS = 'mapbox://styles/mapbox/satellite-streets-v10'
}
