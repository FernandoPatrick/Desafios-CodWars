function toCamelCase(str){
  let results = str.split('-').join(' ').split('_').join(' ').split(' ')
  let exit = [results[0]]
  for(let i = 1; i < results.length; i++) {
    exit.push(results[i].replace(results[i][0], results[i][0].toUpperCase()))
    }
  return exit.join('')
}

