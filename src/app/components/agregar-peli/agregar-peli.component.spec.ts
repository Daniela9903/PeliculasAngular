import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPeliComponent } from './agregar-peli.component';

describe('AgregarPeliComponent', () => {
  let component: AgregarPeliComponent;
  let fixture: ComponentFixture<AgregarPeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPeliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
