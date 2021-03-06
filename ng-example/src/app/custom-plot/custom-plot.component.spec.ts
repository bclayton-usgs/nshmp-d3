import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPlotComponent } from './custom-plot.component';

describe('CustomPlotComponent', () => {
  let component: CustomPlotComponent;
  let fixture: ComponentFixture<CustomPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
