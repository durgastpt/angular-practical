import { TestBed } from '@angular/core/testing';

import { EppTableServicesService } from './epp-table-services.service';

describe('EppTableServicesService', () => {
  let service: EppTableServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EppTableServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
