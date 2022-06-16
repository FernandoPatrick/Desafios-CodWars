// Dados dois números e um operador aritmético (o nome dele, como uma string), retorne o resultado dos dois números com esse operador usado neles.
// a e b serão ambos inteiros positivos, e a sempre será o primeiro número na operação e b sempre o segundo.
// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5


function arithmetic(a, b, operator){
  switch (operator) {
      case "add":
      return a + b
      case "subtract":
      return a - b
      case "multiply":
      return a * b
      case "divide":
      return a / b
  }
}

console.log(arithmetic(5, 2, "add")) // 7