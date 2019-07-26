import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeakTrackerSliderComponent } from './peak-tracker-slider.component';

describe('WeatherSliderComponent', () => {
  let component: PeakTrackerSliderComponent;
  let fixture: ComponentFixture<PeakTrackerSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeakTrackerSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeakTrackerSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
