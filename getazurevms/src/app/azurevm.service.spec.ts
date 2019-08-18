import { TestBed } from '@angular/core/testing';

import { AzurevmService } from './azurevm.service';

describe('AzurevmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AzurevmService = TestBed.get(AzurevmService);
    expect(service).toBeTruthy();
  });
});
