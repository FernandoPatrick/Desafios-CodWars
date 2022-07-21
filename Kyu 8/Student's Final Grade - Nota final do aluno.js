// Crie uma função finalGrade, que calcula a nota final de um aluno dependendo de dois parâmetros: uma nota para o exame e um número de projetos concluídos.

// Esta função deve receber dois argumentos: exame - nota para exame (de 0 a 100); projetos - número de projetos concluídos (a partir de 0);

// Esta função deve retornar um número (nota final). Existem quatro tipos de notas finais:

// 100, se a nota do exame for superior a 90 ou se um número de projetos concluídos for superior a 10.
// 90, se a nota do exame for superior a 75 e se o número de projetos concluídos for mínimo 5.
// 75, se a nota do exame for superior a 50 e se o número de projetos concluídos for mínimo 2.
// 0, em outros casos
// Exemplos( Entradas --> Saída ):

// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100

// 85, 5 --> 90

// 55, 3 --> 75

// 55, 0 --> 0
// 20, 2 --> 0
// * Use Comparação e Operadores Lógicos.

function finalGrade (exam, projects) {
  let result = 0
  if(exam > 90 || projects > 10){
    result = 100
  }else if(exam > 75 && projects >= 5 ){
    result = 90
  }else if(exam > 50 && projects >= 2){
    result = 75
  }else {
    result = 0
  }
  return result
}

console.log(finalGrade(100, 12)) // 100