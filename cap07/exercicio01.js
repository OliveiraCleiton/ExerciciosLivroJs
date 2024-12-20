const prompt = require('prompt-sync')();

const parcelas = Number(prompt('Número de parcelas: '));

const hoje = new Date();

let dia = hoje.getDate();
let mes = hoje.getMonth() +1;
let ano = hoje.getFullYear();
console.log(typeof(dia));


for (let i = 1; i <= parcelas; i++){
    mes++
    if( mes > 12){
        ano++
        mes = 0;
        mes++
    }
    console.log(`${i}º parcela vencimento: ${dia}/${mes}/${ano}`)
}

