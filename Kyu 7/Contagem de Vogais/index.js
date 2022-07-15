// Retorna o número (contagem) de vogais na string fornecida.

// Consideraremos a, e, i, o, ucomo vogais para este Kata (mas não y).

// A string de entrada consistirá apenas em letras minúsculas e/ou espaços.

function getCount(str) {
  let count = 0;
  let vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}