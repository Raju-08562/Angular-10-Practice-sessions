import { TestBed } from '@angular/core/testing';

import { CanDeactivatechangesGuard } from './can-deactivatechanges.guard';

describe('CanDeactivatechangesGuard', () => {
  let guard: CanDeactivatechangesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivatechangesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
