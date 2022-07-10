// Sort Numbers

// Termine a solução para que ela classifique o array de números passado. Se a função passar em uma matriz vazia ou valor nulo/nil, ela deverá retornar uma matriz vazia.

// Por exemplo:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// function solution(nums){
//   if(!nums) return []
//   return nums.sort((a,b) => a - b)
// }

const solution = nums => !nums ? [] : nums.sort((a,b) => a - b)