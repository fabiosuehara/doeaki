const form = document.getElementById("login-form")
const formSubmit = document.getElementById("form-submit")

formSubmit.addEventListener("click", (e) => {
  e.preventDefault()
  const username = form.usuario.value
  const password = form.senha.value

  if (username === "user" && password === "123") {
    location.href = "campanha.html"
  } else {
    form.reset()
    alert("Usuário ou senha incorretos.")
  }
})
