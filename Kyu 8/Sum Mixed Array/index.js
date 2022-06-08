function sumMix(x){
  let soma = 0
  for(i = 0; i < x.length; i++) {
    soma += parseInt(x[i])
  }  
  return soma
}

console.log(sumMix([9, 3, '7', '3']))