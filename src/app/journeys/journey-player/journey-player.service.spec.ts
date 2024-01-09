import { TestBed } from '@angular/core/testing';

import { JourneyPlayerService } from './journey-player.service';

describe('JourneyPlayerService', () => {
  let service: JourneyPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JourneyPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
