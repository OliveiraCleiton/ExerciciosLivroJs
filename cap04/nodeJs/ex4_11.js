const prompt = require("prompt-sync")()

const velVia = Number(prompt("velocidade permitida na via: "))
const velVeiculo = Number(prompt("Velocidade do veículo: "))

const multaLeve = velVia * 0.20 + velVia
if (velVeiculo >= multaLeve){
    console.log("Velocidade muito acima da permitida, multa grave")
} else if (velVeiculo <= velVia){
    console.log("Dentro da velocidade permitida da via")
} else{
    console.log("Velocidade acima da permitida, multa leve")
}