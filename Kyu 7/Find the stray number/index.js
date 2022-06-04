function stray(numbers) {
  for(let i of numbers) {
    if(numbers.indexOf(i) === numbers.lastIndexOf(i)) {
      return i
    }
  }
  }