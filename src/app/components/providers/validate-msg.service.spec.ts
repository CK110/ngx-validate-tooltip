import { TestBed, inject } from '@angular/core/testing';

import { ValidateMsgService } from './validate-msg.service';

describe('ValidateMsgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateMsgService]
    });
  });

  it('should ...', inject([ValidateMsgService], (service: ValidateMsgService) => {
    expect(service).toBeTruthy();
  }));
});
