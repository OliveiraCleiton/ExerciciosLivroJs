const frm = document.querySelector("form")
const resposta = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    // let peso
    // if (masculino) {
    //     peso = 22 * Math.pow(altura, 2) // Math.pow eleva ao quadrado
    // } else {
    //     peso = 21 * Math.pow(altura, 2)
    // }

    const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2) 

    resposta.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`
})

frm.addEventListener("reset", () => {
    resposta.innerText = " " //Limpa o conteúdo do elemento h3 que exibe a resposta
})