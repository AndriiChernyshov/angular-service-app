import { TestBed, inject } from '@angular/core/testing';

import { ObjectDefinitionService } from './object-definition.service';

describe('ObjectDefinitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjectDefinitionService]
    });
  });

  it('should be created', inject([ObjectDefinitionService], (service: ObjectDefinitionService) => {
    expect(service).toBeTruthy();
  }));
});
