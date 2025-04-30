import { TestBed } from '@angular/core/testing';

import { BoughtItemService } from './bought-item.service';

describe('BoughtItemService', () => {
  let service: BoughtItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoughtItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
