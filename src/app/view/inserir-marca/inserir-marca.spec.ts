import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirMarca } from './inserir-marca';

describe('InserirMarca', () => {
  let component: InserirMarca;
  let fixture: ComponentFixture<InserirMarca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InserirMarca],
    }).compileComponents();

    fixture = TestBed.createComponent(InserirMarca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
