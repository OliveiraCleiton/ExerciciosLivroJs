const prompt = require("prompt-sync")();

const anuncio = prompt("Anúncio: ");
let numPalavras = 0;
const tam = anuncio.length;
for (const letra of anuncio){
    if(letra == ' '){
        numPalavras ++
    }
}

console.log(`${(numPalavras + 1)}`)
