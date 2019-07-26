import { TestBed } from '@angular/core/testing';

import { MyListManagerService } from './my-list-manager.service';

describe('MyListManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyListManagerService = TestBed.get(MyListManagerService);
    expect(service).toBeTruthy();
  });
});
