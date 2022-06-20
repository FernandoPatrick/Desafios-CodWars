// Transportation on vacation

// Depois de um trimestre difícil no escritório, você decide descansar um pouco nas férias. Então você vai reservar um voo para você e sua namorada e tentar deixar toda a bagunça para trás.

// Você vai precisar de um carro alugado para se locomover em suas férias. O gerente do aluguel de carros faz algumas boas ofertas.

// Cada dia que você aluga o carro custa $ 40. Se você alugar o carro por 7 dias ou mais, você ganha $ 50 de desconto no total. Alternativamente, se você alugar o carro por 3 ou mais dias, você ganha $ 20 de desconto no total.

// Escreva um código que forneça o valor total para diferentes dias(d).

function rentalCarCost(d) {
  if(d >= 7) return d * 40 - 50
  else if(d >= 3) return d * 40 - 20
  return d * 40
}

console.log(rentalCarCost(3)) // 60