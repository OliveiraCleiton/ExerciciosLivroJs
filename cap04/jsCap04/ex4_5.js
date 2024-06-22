const frm = document.querySelector("form")
const resposta = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    const raiz = Math.sqrt(numero)
    if (Number.isInteger(raiz)){
        resposta.innerText = "Raiz: " + raiz
    } else {
        resposta.innerText = "Não há raiz para esse número"
    }
})
