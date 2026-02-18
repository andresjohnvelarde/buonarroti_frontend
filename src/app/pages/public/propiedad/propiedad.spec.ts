import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Propiedad } from './propiedad';

describe('Propiedad', () => {
  let component: Propiedad;
  let fixture: ComponentFixture<Propiedad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Propiedad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Propiedad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
