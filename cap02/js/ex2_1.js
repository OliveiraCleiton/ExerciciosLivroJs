const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", e =>{
    let nome = frm.inNome.value // Obtém o nome digitado no form
    resp.innerText = `Olá ${nome}` // Exibe a resposta do programa
    e.preventDefault() // Evita o envio do form
})
