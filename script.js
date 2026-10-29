const buttonPalavraSecreta = document.getElementById("btnEnviarSecreta")
const mostrarPalavraSecreta = document.getElementById("mostrarPalavraSecreta")
const palavraDigitada = document.getElementById("palavraDigitada")
const formEnviar = document.getElementById("form-enviar")

let palavraDigitadaSalva

formEnviar.onsubmit = (event) => {
    event.preventDefault()
    
    const formData = new FormData(formEnviar)
    console.log(formData.get("palavraDigita"));

    palavraDigitada.value = ""
    
}

console.log(palavraDigitadaSalva);
