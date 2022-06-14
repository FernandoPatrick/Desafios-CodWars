// Escreva uma função que receba um array de strings como argumento e retorne um array ordenado contendo as mesmas strings, ordenadas do menor para o maior.

function sortArray(array) {
  return array.sort((a, b) => a.length - b.length);
}

console.log(sortArray(['gato', '', '', 'cachorro', 'ovo'])); // ['', '', 'cachorro', 'gato', 'ovo']