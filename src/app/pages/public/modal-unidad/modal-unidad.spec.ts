import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUnidad } from './modal-unidad';

describe('ModalUnidad', () => {
  let component: ModalUnidad;
  let fixture: ComponentFixture<ModalUnidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalUnidad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalUnidad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
