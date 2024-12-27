const calcularMedia = (...notas) => {
    const num = notas.length;
    if (notas == 0){
        console.log("Informe, no minímo, um nota");
    }

    let soma = 0;
    for (const nota of notas) {
        soma +=nota
    }

    const media = soma / num
    console.log(`A média é de: ${media.toFixed(1)}`)
}

calcularMedia(10, 8, 7,9);
calcularMedia(4, 8, 3, 7);
