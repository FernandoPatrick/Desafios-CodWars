// Isograms

// Um isograma é uma palavra que não tem letras repetidas, consecutivas ou não consecutivas. Implemente uma função que determina se uma string que contém apenas letras é um isograma. Suponha que a string vazia seja um isograma. Ignorar maiúsculas e minúsculas.

// Exemplo: (Entrada --> Saída)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(word){
  word = word.toLowerCase().split('').sort()
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i+1]) {
      return false
    }
  }
  return true
}