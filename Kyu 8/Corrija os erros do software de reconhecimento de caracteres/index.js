// O software de reconhecimento de caracteres é amplamente utilizado para digitalizar textos impressos. Assim, os textos podem ser editados, pesquisados ​​e armazenados em um computador.

// Quando os documentos (especialmente os muito antigos escritos com uma máquina de escrever) são softwares de reconhecimento de caracteres digitalizados, muitas vezes cometem erros.

// Sua tarefa é corrigir os erros no texto digitalizado. Você só precisa lidar com os seguintes erros:

// S é mal interpretado como5
// Oé mal interpretado como0
// Ié mal interpretado como1
// Os casos de teste contêm números apenas por engano.

function correct(text) {
  return text.split('').map(text => { 
    if (text === '5') return 'S';
    if (text === '0') return 'O';
    if (text === '1') return 'I';
    return text; 
} ).join('')}
