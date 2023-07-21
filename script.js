// Elementos do formulário
const form = document.querySelector("#formContato");
const nomeInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const assuntoInput = document.querySelector("#assunto");
const mensagemInput = document.querySelector("#mensagem");

// Mensagens de erro
const erroMensagens = {
    nome: "Nome não pode ficar em branco",
    email: {
        required: "E-mail não pode ficar em branco",
        invalid: "E-mail inválido",
    },
    assunto: "Assunto não pode ficar em branco",
    mensagem: "Mensagem não pode ficar em branco",
};

// Event listener para envio do formulário
form.addEventListener("submit", function (event) {
    event.preventDefault();
    resetarErros();
    validarInputs();
});

// Função para resetar as mensagens de erro
function resetarErros() {
    document.getElementById("nomeErro").innerText = "";
    document.getElementById("emailErro").innerText = "";
    document.getElementById("assuntoErro").innerText = "";
    document.getElementById("mensagemErro").innerText = "";

    nomeInput.parentElement.classList.remove("error");
    emailInput.parentElement.classList.remove("error");
    assuntoInput.parentElement.classList.remove("error");
    mensagemInput.parentElement.classList.remove("error");
}

// Função para validar os campos de formulário
function validarInputs() {
    const nomeValor = nomeInput.value.trim();
    const emailValor = emailInput.value.trim();
    const assuntoValor = assuntoInput.value.trim();
    const mensagemValor = mensagemInput.value.trim();

    if (nomeValor === "") {
        setarErro(nomeInput, erroMensagens.nome);
    }

    if (emailValor === "") {
        setarErro(emailInput, erroMensagens.email.required);
    } else if (!emailValido(emailValor)) {
        setarErro(emailInput, erroMensagens.email.invalid);
    }

    if (assuntoValor === "") {
        setarErro(assuntoInput, erroMensagens.assunto);
    }

    if (mensagemValor === "") {
        setarErro(mensagemInput, erroMensagens.mensagem);
    }
}

// Função para exibir a mensagem de erro no campo
function setarErro(input, erroMensagem) {
    const erroMensagemElemento = input.nextElementSibling;
    erroMensagemElemento.innerText = erroMensagem;
    input.parentElement.classList.add("error");
}

// Função para validar o formato do e-mail
function emailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

