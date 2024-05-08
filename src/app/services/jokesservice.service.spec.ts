import { TestBed } from '@angular/core/testing';

import { JokesserviceService } from './jokesservice.service';

describe('JokesserviceService', () => {
  let service: JokesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
