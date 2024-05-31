const frm = document.querySelector('form')
const resp1 = document.querySelector('h2')

frm.addEventListener('submit', (e) => {

    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    const dobroPreco = preco * 2
    const desconto = Math.floor(dobroPreco)

    resp1.innerText = `Promoção de ${medicamento}
    \nLeve dois por R$: ${desconto}`

    e.preventDefault()

})