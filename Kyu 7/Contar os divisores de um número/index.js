// Count the divisors of a number

// Conte o número de divisores de um inteiro positivo n.

// Testes aleatórios vão até n = 500000.

// Exemplos (entrada --> saída)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n){
  let result = 0
  if(n == 1)  return 1
  for(let i = 0; i <= n; i++) {
     if(n % i == 0) {
      result++
    }
  }
return result
}


