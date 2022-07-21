// Remove exclamation marks

// Função de escrita RemoveExclamationMarks que remove todos os pontos de exclamação de uma determinada string.

function removeExclamationMarks(s) {
  let result = s.split('')
  let retorno = []
  result.map(function(indice) {
    if(indice != "!") {
      retorno.push(indice)
    }
  })
  return retorno.join("");
}
