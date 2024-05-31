const frm = document.querySelector('form')
const resp1 = document.querySelector('h2')

frm.addEventListener('submit', (e) => {

    const quilo = Number(frm.inValorKilo.value)
    const consumo = Number(frm.inConsumoGrama.value)

    const conversaoKparaG = consumo / 1000
    const valor= quilo * conversaoKparaG
    // const valor = (quilo/1000) * consumo & Cálculo do professor 
    resp1.innerText = `valor total a ser pago: ${valor.toFixed(2)}`

    e.preventDefault()

})