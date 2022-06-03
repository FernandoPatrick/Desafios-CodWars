function doubleChar(str) {
  let arr = str.split('');
  let newArr = [];
  for(let i of arr){
    newArr.push(i, i, i);
  }
  return newArr.join('');
}

console.log(doubleChar('Thea')); // "TThhee"