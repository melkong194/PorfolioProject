import { TestBed } from '@angular/core/testing';

import { PorfService } from './porf.service';

describe('PorfService', () => {
  let service: PorfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
