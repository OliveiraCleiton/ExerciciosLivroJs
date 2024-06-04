const prompt = require("prompt-sync")()

const salario = Number(prompt("Qual o salário: "))
const anosServico = Number(prompt("Quantos anos trabalhado: "))

const bonificacao = Math.floor(anosServico / 4)
const salarioFinal = salario + (bonificacao /100 * salario)

console.log(`O salário considerando o quadrienios informado é de ${salarioFinal.toFixed(2)}`)
