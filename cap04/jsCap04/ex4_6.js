const frm = document.querySelector("form")
const resposta01 = document.querySelector("#resposta01")
const resposta02 = document.querySelector("#resposta02")
const resposta03 = document.querySelector("#resposta03")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const saque = Number(frm.inSaque.value)
    if (saque % 10 != 0) {
        alert("Valor solicitado é inválido para as notas disponíveis(R$: 10, 20, 50)")
        frm.inSaque.focus()
        return
    }

    const notasCem = Math.floor(saque / 100)
    let resto = saque % 100
    const notasCinquenta = Math.floor(resto / 50)
    resto = resto % 50
    const notasDez = Math.floor(resto / 10)

    console.log(notasCem, notasCinquenta, notasDez)

    if (notasCem > 0) {
        resposta01.innerText = `Notas de R$ 100: ${notasCem}`
    }
    if (notasCinquenta > 0) {
        resposta02.innerText = `Notas de R$ $ 50: ${notasCinquenta}`
    }
    if (notasDez > 0) {
        resposta03.innerText = `Notas de R$ $ 10: ${notasDez}`
    }

})