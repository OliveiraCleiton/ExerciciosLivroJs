const prompt = require('prompt-sync')();

const formula = prompt('Digite a fórmula: ');
let abre = 0;
let fecha = 0;

for (const simbolo of formula) {
    if(simbolo == '('){
        abre++
    } else if( simbolo == ')'){
        fecha++
    }
    if (fecha > abre){
        break
    }
}

if (abre == fecha){
    console.log('OK! fórmula correta em relação aos parentêses');
} else {
    console.log('Error... Fórmula incorreta')
}