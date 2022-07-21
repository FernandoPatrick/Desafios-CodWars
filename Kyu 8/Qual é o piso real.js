// What's the real floor?

// Os americanos são pessoas estranhas: em seus prédios, o primeiro andar é na verdade o térreo e não há 13º andar (por superstição).

// Escreva uma função que dado um piso no sistema americano retorna o piso no sistema europeu.

// Com a substituição do 1º andar pelo rés-do-chão e a remoção do 13º andar, os números descem para ocupar o seu lugar. No caso de acima de 13, eles descem em dois porque há dois números omitidos abaixo deles.

// Os porões (negativos) permanecem iguais ao nível universal.

// Exemplos
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

function getRealFloor(n) {
  if(n <= 0) return n
  if(n <= 13) return n - 1
  return n - 2
}