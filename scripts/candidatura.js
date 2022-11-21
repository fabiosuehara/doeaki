const candidatura = document.getElementById("candidatura")

candidatura.addEventListener("click", (e) => {
  e.preventDefault()
  alert(`Candidatura recebida, aguarde um e-mail com informações.`)
  location.href = "campanha.html"
})

function checkbox(checkbox) {
  var checkboxes = document.getElementsByName("funcao")
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false
  })
}
