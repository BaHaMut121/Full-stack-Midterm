import { TestBed } from '@angular/core/testing';

import { JetsadaService } from './jetsada.service';

describe('JetsadaService', () => {
  let service: JetsadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JetsadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
