// A barata é um dos insetos mais rápidos. Escreva uma função que receba sua velocidade em km por hora e a retorne em cm por segundo, arredondado para o inteiro (= piso).

// Por exemplo:

// 1.08 --> 30
// Observação! A entrada é um número real (o tipo real depende do idioma) e é >= 0. O resultado deve ser um número inteiro.

function cockroachSpeed(s) {
  return Math.floor(s*27.777777778)
}