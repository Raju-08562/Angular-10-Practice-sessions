import { TestBed } from '@angular/core/testing';

import { AdminEditGuardGuard } from './admin-edit-guard.guard';

describe('AdminEditGuardGuard', () => {
  let guard: AdminEditGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminEditGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
