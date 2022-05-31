function findNeedle(haystack) {
  for(let agulha of haystack) {
    if(agulha === 'needle') {
      return `found the needle at position ${haystack.indexOf(agulha)}`
    }
  }
}

findNeedle(['hay', 'hay', 'hay', 'hay', 'needle', 'hay', 'hay'])
console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))
