import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userAuth2Guard } from './user-auth2.guard';

describe('userAuth2Guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userAuth2Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
