const prompt = require('prompt-sync')();

const palavra = prompt('Digite uma palavra... ');
let palindromo = '';
for (let i = 0; i <= (palavra.length - 1); i++) {
    palindromo += palavra.charAt(palavra.length - 1 - i)
}
console.log(palindromo, palavra)