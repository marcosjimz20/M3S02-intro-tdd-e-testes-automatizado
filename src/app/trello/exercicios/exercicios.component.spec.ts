import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosComponent } from './exercicios.component';

describe('ExerciciosComponent', () => {
  let component: ExerciciosComponent;
  let fixture: ComponentFixture<ExerciciosComponent>;

    //Exercício 7 (beforeEach***):
    let total = 0;

  beforeEach(() => {
    total += 10;
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


     // Exercício 5:
    it('Deve verificar se existe o item “lasanha“ dentro do array', () => {
      let item = 'lasanha';
      let array = component.adicionarAluno(item);

      expect(array[array.length - 1] == item).toContain("lasanha");
    });


     // Exercício 6:
    it('Deve lançar Throw caso não exista a variavél "lasanha" dentro do array', () => {
      expect(() => {component.verificarItem("null")}).toThrowError("Não existe esse item dentro da lista");
      expect(() => {component.verificarItem("null")}).toThrowError(TypeError);
    });

    // ...caso de erro o teste anterior (Ex. 6), usar esta opção  
    it('Deve validar o metodo multiplicar', () => {
      expect(component.verificarItem).toThrow();
    });


    // Exercício 7 (beforeEach***):
    it('Deve somar mais 10 e retornar o valor total na chamada', () => {
      total += 20;
      expect(total).toEqual(30);
    });

});