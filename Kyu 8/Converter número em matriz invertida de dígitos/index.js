// Convert number to reversed array of digits

// Dado um número aleatório não negativo, você deve retornar os dígitos desse número em uma matriz na ordem inversa.

// Exemplo (Entrada => Saída):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n) {
  return n.toString().split('').reverse().map((n) => parseInt(n))
}