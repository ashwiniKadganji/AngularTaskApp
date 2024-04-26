import { TestBed } from '@angular/core/testing';

import { GlobaErrorHandlerService } from './globa-error-handler.service';

describe('GlobaErrorHandlerService', () => {
  let service: GlobaErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobaErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
