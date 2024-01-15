import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { negatGuard } from './negat.guard';

describe('negatGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => negatGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
