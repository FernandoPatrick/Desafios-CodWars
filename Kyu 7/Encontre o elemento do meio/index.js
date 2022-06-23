// Find the middle element

// Como parte deste Kata, você precisa criar uma função que, quando fornecida com um tripleto, retorne o índice do elemento numérico que está entre os outros dois elementos.

// A entrada para a função será uma matriz de três números distintos (Haskell: uma tupla).

// Por exemplo:

// gimme([2, 3, 1]) => 0
// 2 é o número que se encaixa entre 1 e 3 e o índice de 2 na matriz de entrada é 0 .

// Outro exemplo (só para ter certeza de que está claro):

// gimme([5, 10, 14]) => 1
// 10 é o número que se encaixa entre 5 e 14 e o índice de 10 na matriz de entrada é 1 .

function gimme (triplet) {
  let max = Math.max(...triplet)
  let min = Math.min(...triplet)
  for(let item of triplet) {
    if(item > min && item < max ) return triplet.indexOf(item)
  }
}