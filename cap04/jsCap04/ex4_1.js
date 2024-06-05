const frm = document.querySelector("form")
const resposta = document.querySelector("h2")


frm.addEventListener("submit", (e) => {

    const aluno = frm.inNome.value
    const nota01 = Number(frm.inNota01.value)
    const nota02 = Number(frm.inNota02.value)

    const media = (nota01 + nota02) / 2

    if (media >= 7) {
        resposta.innerText =
            `Parabéns ${aluno} sua média foi de ${media}, e você está aprovado.`
        resposta.style.color = "green"
    }  else {
        resposta.innerText =
            `${aluno}, será necessário estudar mais, sua média foi ${media}.
        E por enquanto você está reprovado`
        resposta.style.color = "red"
    }
    e.preventDefault()
//   
})