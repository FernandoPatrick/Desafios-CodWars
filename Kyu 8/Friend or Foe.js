// Make a program that filters a list of strings and returns a list with only your friends name in it. 
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]




function friend(friends){
  let result = []
  let result2 = []
  for(let i = 0; i < friends.length; i++) {
    if(friends[i].length == 4) {
      result.push(friends[i])
    } else {
      result2.push(friends[i])
    }
  }
  return result
}

console.log(friend(['Ryan', 'Kieran', 'Mark'])) 