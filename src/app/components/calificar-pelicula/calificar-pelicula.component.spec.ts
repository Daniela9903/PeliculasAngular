import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificarPeliculaComponent } from './calificar-pelicula.component';

describe('CalificarPeliculaComponent', () => {
  let component: CalificarPeliculaComponent;
  let fixture: ComponentFixture<CalificarPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificarPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
