const frm = document.querySelector("form")
const frmPreco = document.querySelector("#inPreco").value
const frmProduto = document.querySelector("#inProduto").value
const resp1 = document.querySelector("h3")
const resp2 =document.querySelector("h2")



frm.addEventListener("submit", (e)=> {
    
    const terceiroProduto = frmPreco / 2
    const valorTotal = frmPreco * 2 + terceiroProduto
    resp1.innerText = `${frmProduto} - Promoção: Leve 3 por R$ ${valorTotal}`
    resp2.innerText = `O 3º produto sai por apenas R$ ${terceiroProduto.toFixed(2)}`

    e.preventDefault()
})