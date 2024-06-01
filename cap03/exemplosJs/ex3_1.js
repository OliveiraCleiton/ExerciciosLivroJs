const prompt = require("prompt-sync")()    //adiciona o pacote para entrada de dados
const num1 = Number(prompt("1º número: ")) //lê os números
const num2 = Number(prompt("2º número: "))

const soma =num1 + num2
console.log("A soma é " + soma)