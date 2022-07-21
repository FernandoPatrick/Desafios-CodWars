// Neste Kata estamos passando um número (n) para uma função.
// Seu código determinará se o número passado é par (ou não).
// A função precisa retornar um true ou false.
// Os números podem ser positivos ou negativos, inteiros ou flutuantes.
// Floats com parte decimal diferente de zero são considerados UNeven para este kata.



function testEven(n) {
  return n % 2 == 0 ? true : false
}

console.log(testEven(2)) // true