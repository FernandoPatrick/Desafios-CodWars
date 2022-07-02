// Calculate average

// Escreva uma função que calcule a média dos números em uma determinada lista.

// Nota: Arrays vazios devem retornar 0.


const find_average = array => !array.length ? 0 : (array.reduce((acumulador, item) => acumulador + item, 0)) / array.length