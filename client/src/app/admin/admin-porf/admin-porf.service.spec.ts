import { TestBed } from '@angular/core/testing';

import { AdminPorfService } from './admin-porf.service';

describe('AdminPorfService', () => {
  let service: AdminPorfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminPorfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
