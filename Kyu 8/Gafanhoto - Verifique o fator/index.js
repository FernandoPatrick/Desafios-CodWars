// Grasshopper - Check for factor

// Esta função deve testar se o factoré um fator de base.

// Retorna truese for um fator ou falsese não for.

// Sobre fatores
// Fatores são números que você pode multiplicar para obter outro número.

// 2 e 3 são fatores de 6 porque:2 * 3 = 6

// Você pode encontrar um fator dividindo números. Se o resto for 0, então o número é um fator.
// Você pode usar o operador mod ( %) na maioria dos idiomas para verificar um resto
// Por exemplo, 2 não é um fator de 7 porque:7 % 2 = 1

// Nota: baseé um número não negativo, factoré um número positivo.

const checkForFactor = (base, factor) => base % factor === 0;