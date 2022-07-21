// Round up to the next multiple of 5

// Dado um inteiro como entrada, você pode arredondar para o próximo múltiplo (ou seja, "maior") de 5?

// Exemplos:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// A entrada pode ser qualquer número inteiro positivo ou negativo (incluindo 0).

// Você pode assumir que todas as entradas são inteiros válidos.

function roundToNext5(n){
  if (n % 5 == 0 ) return n
return roundToNext5(n+1);
}