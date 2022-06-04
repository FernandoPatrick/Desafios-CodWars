function removeSmallest(numbers) {
  let copy = [...numbers]
  let smallestIndex = numbers.indexOf(Math.min(...numbers))
  copy.splice(smallestIndex,1)
  return copy
}