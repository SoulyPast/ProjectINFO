import { TestBed } from '@angular/core/testing';

import { InfoadkarsService } from './infoadkars.service';

describe('InfoadkarsService', () => {
  let service: InfoadkarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoadkarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
