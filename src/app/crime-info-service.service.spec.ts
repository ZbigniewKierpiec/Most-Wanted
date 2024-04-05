import { TestBed } from '@angular/core/testing';

import { CrimeInfoServiceService } from './crime-info-service.service';

describe('CrimeInfoServiceService', () => {
  let service: CrimeInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrimeInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
