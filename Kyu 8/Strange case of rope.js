function toWeirdCase(string){
  let results = string.split(' ')
  console.log(results)
  let exit = []
  for(let result of results) {
    let weird = wordMan(result)
    exit.push(weird)
    }
  return exit.join(' ')
}

function wordMan(word) {
  let str = ''
  for(let i = 0; i < word.length; i++) {
      if(i % 2 == 0) {
        str += word[i].toUpperCase()
      }else {
        str += word[i].toLowerCase()
      }
    }
    return str
}  
