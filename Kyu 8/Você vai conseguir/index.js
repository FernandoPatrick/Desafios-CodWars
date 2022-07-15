// Will you make it?

// Você estava acampando com seus amigos longe de casa, mas quando é hora de voltar, você percebe que seu combustível está acabando e a bomba mais próxima está 50a quilômetros de distância! Você sabe que, em média, seu carro roda cerca de 25milhas por galão. Restam 2galões.

// Considerando esses fatores, escreva uma função que diga se é possível chegar à bomba ou não.

// A função deve retornar truese for possível e falsese não.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump / (fuelLeft * mpg) <= 1