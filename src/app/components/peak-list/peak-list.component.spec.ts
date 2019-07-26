import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeakListComponent } from './peak-list.component';

describe('TrailListComponent', () => {
  let component: PeakListComponent;
  let fixture: ComponentFixture<PeakListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeakListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeakListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
