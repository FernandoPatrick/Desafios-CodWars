// Dada uma sequência de dígitos, você deve substituir qualquer dígito abaixo de 5 por '0' e qualquer dígito 5 e acima por '1'. Retorne a string resultante. Nota: input nunca será uma string vazia

function fakeBin(x){
  let result = []
  for(let i = 0; i < x.length; i++) {
    if(x[i] < 5) {
      result.push(0)
    }else{
      result.push(1)
    }
  }
  return result.join('')
}