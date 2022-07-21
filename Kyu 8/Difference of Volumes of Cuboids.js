// Neste exercício simples, você criará um programa que receberá duas listas de inteiros, a e b. Cada lista consistirá de 3 inteiros positivos acima de 0, representando as dimensões dos paralelepípedos a e b. Você deve encontrar a diferença dos volumes dos paralelepípedos, independentemente de qual seja maior.
// Por exemplo, se os parâmetros passados ​​forem ([2, 2, 3], [5, 4, 1]), o volume de a é 12 e o volume de b é 20. Portanto, a função deve retornar 8.



function findDifference(a, b) {
  var a3 = a[0]*a[1]*a[2];
  var b3 = b[0]*b[1]*b[2];
  if (a3>b3) {
    return a3-b3;
  } else {
    return b3-a3;
  }
}

console.log(findDifference([2, 2, 3], [5, 4, 1]))

