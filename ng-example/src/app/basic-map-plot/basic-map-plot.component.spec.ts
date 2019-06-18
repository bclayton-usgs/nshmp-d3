import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMapPlotComponent } from './basic-map-plot.component';

describe('BasicMapPlotComponent', () => {
  let component: BasicMapPlotComponent;
  let fixture: ComponentFixture<BasicMapPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicMapPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicMapPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
