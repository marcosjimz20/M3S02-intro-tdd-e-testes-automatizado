import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent {

    //Exercício 2:
    calculaMedia(nota1: number, nota2: number, nota3: number): number {
      if (nota1 == 0 && nota2 == 0 && nota3 == 0) {
        throw("Não é possível calcular a média com as notas zeradas");
      }
      return (nota1 + nota2 + nota3) / 3;
    }

}
