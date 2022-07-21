// Quarter of the year

// Dado um mês como um número inteiro de 1 a 12, retorne a qual trimestre do ano ele pertence como um número inteiro.

// Por exemplo: o mês 2 (fevereiro), faz parte do primeiro trimestre; o mês 6 (junho), faz parte do segundo trimestre; e o mês 11 (novembro), faz parte do quarto trimestre.


function quarterOf(month) {
  switch(month) {
      case 1:
      case 2:
      case 3:
        return 1
      case 4:
      case 5:
      case 6:
        return 2
      case 7:
      case 8:
      case 9:
        return 3
      default: return 4
  }
}