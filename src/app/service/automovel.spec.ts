import { TestBed } from '@angular/core/testing';

import { Automovel } from './automovel';

describe('Automovel', () => {
  let service: Automovel;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Automovel);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
