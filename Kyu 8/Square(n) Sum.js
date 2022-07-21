function squareSum(numbers){
  let result = 0;
  for(let num of numbers){
    result += num * num;
  }
  return result;
}