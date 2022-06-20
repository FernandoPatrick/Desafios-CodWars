// Crie uma função que receba 2 inteiros na forma de uma string como entrada e produza a soma (também como uma string):

// Exemplo: ( Entrada1, Entrada2 --> Saída )

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

function sumStr(a,b) {
  if (a === "" && b === "") {
     return "0"
   }
    if (b === "") {
      return a 
   }
    if (a === "") {
    return b
   }
    return (parseInt(a) + parseInt(b)).toString()
  }

  console.log(sumStr("4", "5")) // "9"