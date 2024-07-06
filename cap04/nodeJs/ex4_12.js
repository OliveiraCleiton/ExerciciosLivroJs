const prompt = require("prompt-sync")()

const pagamento = Number(prompt("Valor: "))

if (pagamento >= 3.00){
    const troco = pagamento - 3
    console.log(troco)
    console.log("tempo de permanência: 120 min")
    if (troco > 0){
        console.log(`Seu troco é ${troco}`)
    }
}