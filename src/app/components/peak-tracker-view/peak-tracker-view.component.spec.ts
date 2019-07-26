import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeakTrackerViewComponent } from './peak-tracker-view.component';

describe('MyViewComponent', () => {
  let component: PeakTrackerViewComponent;
  let fixture: ComponentFixture<PeakTrackerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeakTrackerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeakTrackerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
