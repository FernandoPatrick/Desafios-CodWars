// Lario and Muigi Pipe Problem

// Questão
// Parece que um encanador rufião e seu irmão andaram por aí e danificando seus palcos novamente.

// A pipesconexão dos estágios do seu nível precisa ser corrigida antes que você receba mais reclamações.

// A lista de pipes está correta quando cada um pipeapós o primeiro índice é maior (+1) que o anterior e que não há duplicatas.

// Tarefa
// Dada a lista de numbers, retorne uma lista fixa para que os valores sejam incrementados em 1 para cada índice do valor mínimo até o valor máximo (ambos incluídos).

// Exemplo
// Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
  const max = Math.max(...numbers)
  const min = Math.min(...numbers)
  const result = []
  for(let i = min; i <= max; i++) {
    result.push(i)
  }
  return result
}