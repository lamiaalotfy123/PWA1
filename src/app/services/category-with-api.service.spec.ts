import { TestBed } from '@angular/core/testing';

import { CategoryWithApiService } from './category-with-api.service';

describe('CategoryWithApiService', () => {
  let service: CategoryWithApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryWithApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
