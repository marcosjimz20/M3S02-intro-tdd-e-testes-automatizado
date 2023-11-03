import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent {

  listaAlunos: string[] = ["Aluno 2", "Aluno 3"];

    //Exercício 2:
    calculaMedia(nota1: number, nota2: number, nota3: number): number {
      if (nota1 == 0 && nota2 == 0 && nota3 == 0) {
        throw("Não é possível calcular a média com as notas zeradas");
      }
      return (nota1 + nota2 + nota3) / 3;
    }


      //Exercício 3:
  adicionarAluno(aluno: string) {
    if (aluno == null || aluno == undefined && aluno == "") {
        throw("Não é possível adicionar o aluno na lista");
    }

    this.listaAlunos.unshift(aluno);
      return this.listaAlunos;
    }


      //Exercicio 4
  removerAluno(valor: string){
    let index = this.listaAlunos.indexOf(valor);
    if (index <= 0) {
      this.listaAlunos.splice(index, 1);
    }
      return this.listaAlunos;
  }

}
