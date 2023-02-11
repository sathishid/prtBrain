import { TestBed } from '@angular/core/testing';

import { SumGeneratorService } from './sum-generator.service';

describe('SumGeneratorService', () => {
  let service: SumGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
