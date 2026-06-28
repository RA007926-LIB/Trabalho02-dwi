function enviarFormulario(event){
    event.preventDefault();

    let nome = document.getElementById("nome").value;

    document.getElementById("mensagem").innerHTML =
    "Obrigado pelo contato, " + nome + "! Sua mensagem foi enviada com sucesso.";
}

document.getElementById("formContato")
.addEventListener("submit", enviarFormulario);
