import { TestBed } from '@angular/core/testing';

import { VehicleServiceService } from './vehicle-service.service';

describe('VehicleServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleServiceService = TestBed.get(VehicleServiceService);
    expect(service).toBeTruthy();
  });
});
