import { TestBed } from '@angular/core/testing';

import { PeakService } from './peak.service';

describe('TrailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeakService = TestBed.get(PeakService);
    expect(service).toBeTruthy();
  });
});
