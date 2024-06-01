const frm = document.querySelector('form')
const resp1 = document.querySelector('h2')

frm.addEventListener('submit', (e) => {

    const valorMin = Number(frm.inValor.value)
    const usoCliente = Number(frm.inTempoUso.value)

    const calculoTempo = usoCliente / 15  
    const valorTotal = Math.ceil(calculoTempo) * valorMin

    console.log("calculo de tempo", calculoTempo, "VAlor a ser pago:", valorTotal)

    

    resp1.innerText =  `Valor a ser pago: R$ ${valorTotal.toFixed(2)}`

    e.preventDefault()

})