import { TestBed, inject } from '@angular/core/testing';

import { AnalyticsLibService } from './analytics-lib.service';

describe('AnalyticsLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnalyticsLibService]
    });
  });

  it('should be created', inject([AnalyticsLibService], (service: AnalyticsLibService) => {
    expect(service).toBeTruthy();
  }));
});
