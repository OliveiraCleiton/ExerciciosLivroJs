const prompt = require('prompt-sync')();

const anoAtual = new Date().getFullYear();
const idade = prompt('Quantos anos você tem? ');

const anoNasc = anoAtual - idade;
console.log('ah.. então você nasceu em ', anoNasc)