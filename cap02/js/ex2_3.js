const frm = document.querySelector('form')
const resp1 = document.querySelector('#resposta1')
const resp2 = document.querySelector('#resposta2')

frm.addEventListener("submit", (e) => {
    const modeloCarro = frm.inCarro.value
    const valor = Number(frm.inValor.value)
    const parcelas = Number(frm.inParcelamento.value)

    const entrada = valor * 0.25
    const saldo = (valor - entrada) / parcelas

    resp1.innerText = `Promoção: ${modeloCarro}`
    resp2.innerText = `Com entrada a partir de ${entrada.toFixed(2)}\nE +${parcelas} parcelas de ${saldo.toFixed(2)}`
    e.preventDefault()
})