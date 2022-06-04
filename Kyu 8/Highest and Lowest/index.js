function highAndLow(numbers){
  let arr = numbers.split(' ')
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  return `${max} ${min}`
}

numbers = '1 2 3 4 5'
highAndLow(numbers)
