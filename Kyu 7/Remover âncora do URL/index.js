// Remove anchor from URL

// Complete a função/método para que ela retorne a url com qualquer coisa após a âncora ( #) removida.

// Exemplos
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
  var index = url.indexOf('#');
  if (index != -1) {  
      return url.substr(0, index);
  }
  return url;
}

const removeUrlAnchor = url => url.indexOf('#') != -1 ? url.substr(0, url.indexOf('#')) : url 

console.log(removeUrlAnchor('www.codewars.com#about')) 