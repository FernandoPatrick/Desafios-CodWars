// Grasshopper - Grade book

// Livro de notas
// Complete a função para que ela encontre a média das três pontuações passadas a ela e retorne o valor da letra associada a essa nota.

// Pontuação Numérica	Nota da letra
// 90 <= pontuação <= 100	'UMA'
// 80 <= pontuação < 90	'B'
// 70 <= pontuação < 80	'C'
// 60 <= pontuação < 70	'D'
// 0 <= pontuação < 60	'F'
// Os valores testados estão todos entre 0 e 100. Não há necessidade de verificar valores negativos ou superiores a 100.

function getGrade (s1, s2, s3) {
  let result = (s1 + s2 + s3) / 3
  console.log(result)
  if(result <= 100 && result >= 90)return 'A'
  if(result < 90 && result >= 80)return 'B'
  if(result < 80 && result >= 70)return 'C'
  if(result < 70 && result >= 60)return 'D'
  return 'F'
}