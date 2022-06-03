function sumArray(array) {
  if (array == null) {
   return 0;
 }
 let soma = 0
 let max = array.indexOf(Math.max(...array))
 let min = array.indexOf(Math.min(...array))
 console.log(max, min)
 if(!array || array.length <= 2) return 0
 for(let arr of array) {
     soma += arr
 }
 soma = soma - array[max] - array[min] 
 return soma
}
console.log(sumArray([1,2,3,3,3,3]))