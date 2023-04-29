import { TestBed } from '@angular/core/testing';

import { DespesaServiceService } from './despesa.service.service';

describe('DespesaServiceService', () => {
  let service: DespesaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DespesaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
