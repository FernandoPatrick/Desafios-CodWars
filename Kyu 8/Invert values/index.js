function invert(array) {
  let result = []
  for(let arr of array) {
      result.push(arr * -1)
  }
   return result;
}