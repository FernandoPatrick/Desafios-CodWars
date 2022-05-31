function findNeedle(haystack) {
  for(let agulha of haystack) {
    if(agulha === 'needle') {
      return `found the needle at position ${haystack.indexOf(agulha)}`
    }
  }
}