let tentativas = 3;

function validarLogin() {
    const nome = document.getElementById("username").value.trim();
    const senha = document.getElementById("password").value;
    const mensagem = document.getElementById("mensagem");

    if (nome === "" || senha === "") {
        mensagem.innerHTML = "Algo está faltando. Por favor verifique os campos.";
        mensagem.className = "error";
        return false;
    }

    if (tentativas <= 0) {
        mensagem.innerHTML = "Usuário bloqueado. Número de tentativas excedido.";
        mensagem.className = "error";
        return false;
    }

    if (senha === "12345") {
        mensagem.innerHTML = `Bem-vindo, ${nome}!`;
        mensagem.className = "success";
        return false;
    } else {
        tentativas--;
        if (tentativas > 0) {
            mensagem.innerHTML = "Senha incorreta. Tente novamente.";
        } else {
            mensagem.innerHTML = "Número de tentativas ultrapassado. O usuário está bloqueado momentaneamente. Tente novamente em 30 minutos.";
        }
        mensagem.className = "error";
        return false;
    }
}

function mostrarSenha() {
    const campoSenha = document.getElementById("password");
    campoSenha.type = campoSenha.type === "password" ? "text" : "password";
}