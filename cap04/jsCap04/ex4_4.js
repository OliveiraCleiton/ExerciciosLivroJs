const frm = document.querySelector("form")
const resposta = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault();

   const horarioBrasil = frm.inHoraBrasil.value
   let horarioFranca = Number(horarioBrasil) + 5
   if(horarioFranca > 24) {
    horarioFranca = horarioFranca - 24
    console.log(typeof(horarioFranca), horarioFranca)
   }
resposta.innerText = `Horário na França: ${horarioFranca}`
})
 