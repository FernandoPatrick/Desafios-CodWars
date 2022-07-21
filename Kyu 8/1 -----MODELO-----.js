function findMultiples(integer, limit) {
  var multiples = [];
  for (var i = integer; i <= limit; i++) {
    if (i % integer === 0) {
      multiples.push(i);
    }
  }
  return multiples;
}