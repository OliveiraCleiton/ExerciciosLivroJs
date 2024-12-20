const prompt = require('prompt-sync')();

let frase = prompt('Digite a frase... ');
let arrayFrase = frase.split('')
let pares = [];
let impares = [];

arrayFrase.forEach((letra, index) => {
    if (index % 2 == 0) {
        pares.push(letra)
    } else {
        impares.push(letra)
    }
})
const fraseCrip = [...impares, ...pares].toString();
console.log(fraseCrip.replace(/,/g, ''))
console.log(frase)