const prompt = require("prompt-sync")()

const kiloRacao = Number(prompt("Peso da ração (kg): "))
const consumoAnimal = Number(prompt("Consumo diário (gr): "))

const duracao = Math.floor(kiloRacao * 1000 / consumoAnimal) 
const sobra = kiloRacao * 1000 % consumoAnimal
console.log(`duração: ${duracao} dias\nSobra: ${sobra}(gr)`)
