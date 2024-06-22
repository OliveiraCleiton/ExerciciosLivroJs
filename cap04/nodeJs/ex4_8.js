const prompt = require("prompt-sync")();

const valorTotal = Number(prompt("Valor total da compra: "))
if (valorTotal / 6 >= 20) {
    valorParcela = valorTotal / 6
    console.log("a compra pode ser divida em até 6 vezes de: ", valorParcela.toFixed(2))
} else if (valorTotal / 5 >= 20) {
    valorParcela = valorTotal / 5
    console.log("a compra pode ser divida em até 5 vezes de: ", valorParcela.toFixed(2))
} else if (valorTotal / 4 >= 20) {
    valorParcela = valorTotal / 4
    console.log("a compra pode ser divida em até 4 vezes de: ", valorParcela.toFixed(2))
} else if (valorTotal / 3 >= 20) {
    valorParcela = valorTotal / 3
    console.log("a compra pode ser divida em até 3 vezes de: ", valorParcela.toFixed(2))
} else if (valorTotal / 2 >= 20) {
    valorParcela = valorTotal / 2
    console.log("a compra pode ser divida em até 2 vezes de: ", valorParcela.toFixed(2))
}

// // Versão do livro:
// const prompt = require("prompt-sync")()

// const valor = Number(prompt("Valor total da compra: "))
// const aux = Math.floor(valor / 20)
// console.log("valor de", aux)
// //aux = nº de parcelas sem condições
// const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux  // cálculo operador ternário
// const valorParcela = valor / parcelas //cálculo valor da parcela
// console.log(`Pode pagar emm ${parcelas}x de R$ ${valorParcela.toFixed(2)}`)

