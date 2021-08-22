import { TestBed } from '@angular/core/testing';

import { AdminDeleteGuardGuard } from './admin-delete-guard.guard';

describe('AdminDeleteGuardGuard', () => {
  let guard: AdminDeleteGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminDeleteGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
