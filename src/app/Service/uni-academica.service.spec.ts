import { TestBed } from '@angular/core/testing';

import { UniAcademicaService } from './uni-academica.service';

describe('UniAcademicaService', () => {
  let service: UniAcademicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniAcademicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
