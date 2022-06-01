function oddOrEven(array) {
  if(!array) {
    return "even"
  }
  let soma = 0
  for(let i of array) {
    soma += i
  }
  if(soma % 2 == 0) {
    return "even"
  }
  return "odd"
}