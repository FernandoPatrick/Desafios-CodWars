// Crie uma função que aceite 2 argumentos de string e retorne um inteiro da contagem de ocorrências em que o 2º argumento for encontrado no primeiro. Se nenhuma ocorrência for encontrada, uma contagem de 0 deve ser retornada.

// Exemplo: ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0

function strCount(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(strCount("Hello", "o")); // 1