const prompt = require("prompt-sync")()

const numero = Number(prompt("Digite uma centena: "))
if (numero < 100 || numero >= 1000){
    console.log("Erro... Número digitado deve ser uma centena")
    return
}

const num1 = Math.floor(numero / 100) // obtém o primeiro número
const sobra =  numero % 100 //o que sobre (dezena)
const num2 = Math.floor(sobra / 10) // obtém o segundo número
const num3 =  sobra % 10 // obtém o terceiro número
console.log(`Invertido: ${num3}${num2}${num1}`) // exibe o número invertido
