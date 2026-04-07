import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMarca } from './listar-marca';

describe('ListarMarca', () => {
  let component: ListarMarca;
  let fixture: ComponentFixture<ListarMarca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarMarca],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarMarca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
