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


      // Exercício 3:
  it('O método adicionarAluno deve adicionar um item no início do array', () => {
    let valor = 'Aluno 1';
    let array = component.adicionarAluno(valor);

    expect(array[0] == valor).toBe(true);
  });


    // Exercício 4:
    it('o método adicionarAluno deve aumentar o número de items do array', () => {
      let tamanhoArray = component.adicionarAluno.length;
      component.adicionarAluno('Aluno Novo');
  
      expect(component.adicionarAluno.length).toBeGreaterThan(tamanhoArray);
    });
  
    // Parte 2 do Exercício 4:
    it('o método removerItem deve disminuir o número de items do array', () => {
      let tamanhoArray = component.removerAluno .length;
      component.removerAluno('Aluno 3');
  
      expect(component.removerAluno.length).toBeLessThan(tamanhoArray);
    });

});