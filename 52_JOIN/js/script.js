// Split - Separa as strings

const frase = 'O rato roeu a roupa do rei de Roma'

const arrayDaFrase = frase.split(' ')

console.log(arrayDaFrase);

// Join - Une as strings

const fraseDeNovo = arrayDaFrase.join(' ')

console.log(frase);

const itensParaComprar = ['Mouse', 'Teclado', 'Monitor']

const fraseDeComprar = `Precisamos comprar: ${itensParaComprar.join(', ')}.`

console.log(fraseDeComprar)