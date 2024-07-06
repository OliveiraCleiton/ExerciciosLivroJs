const prompt = require("prompt-sync")()

const numero = Number(prompt("Digite um número: "))

// if (numero % 2 == 0){
//     console.log(`${numero} é um número par`)
// } else {
// console.log(`${numero} é um número ímpar`)
// }

const resultado = numero % 2 == 0? console.log(`${numero} é um número par`) : console.log(`${numero} é um número ímpar`)