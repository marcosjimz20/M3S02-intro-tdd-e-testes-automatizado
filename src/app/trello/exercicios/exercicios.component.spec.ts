import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosComponent } from './exercicios.component';

describe('ExerciciosComponent', () => {
  let component: ExerciciosComponent;
  let fixture: ComponentFixture<ExerciciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciciosComponent]
    });
    fixture = TestBed.createComponent(ExerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


    //Exercício 2:
    it('O método calculaMedia deve validar e retornar a média de 3 notas', () => {
      let media = component.calculaMedia(6, 10, 8);
  
      expect(media).toEqual(8);
    });

});