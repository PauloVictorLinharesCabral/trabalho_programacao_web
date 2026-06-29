
// documento que gerencia por meio de javascript a funcionalidade de alternância entre modo escuro e claro

const botao = document.getElementById("tema");

botao.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        botao.textContent = "☀️";
        botao.title = "Ativar modo claro";
    } else {
        botao.textContent = "🌙";
        botao.title = "Ativar modo escuro";
    }

});