// CADASTRO
function cadastrarUsuario(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmacao = document.getElementById("confirmacao").value;
  const perfil = document.querySelector("input[name='perfil']:checked").value;
  const mensagem = document.getElementById("mensagem");

  if (!email || !senha || !confirmacao) {
    mensagem.textContent = "Preencha todos os campos.";
    mensagem.style.color = "orange";
    return;
  }

  if (senha !== confirmacao) {
    mensagem.textContent = "As senhas não coincidem.";
    mensagem.style.color = "red";
    return;
  }

  const usuario = { email, senha, perfil };
  localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario));
  mensagem.textContent = "Cadastro realizado com sucesso!";
  mensagem.style.color = "green";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
}

// LOGIN
function validarLogin(event) {
  event.preventDefault();

  const email = document.getElementById("usuario_email").value.trim();
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  const dadosSalvos = localStorage.getItem("usuarioCadastrado");

  if (!dadosSalvos) {
    mensagem.textContent = "Nenhum usuário cadastrado.";
    mensagem.style.color = "red";
    return;
  }

  const usuario = JSON.parse(dadosSalvos);

  if (email === "cooperativas@fortes.com.br" && senha === "123456") {
    mensagem.textContent = "Login feito com sucesso!";
    mensagem.style.color = "limegreen";

    setTimeout(() => {
      window.location.href = "parceiros.html";
    }, 2000);
  } else {
    mensagem.textContent = "Usuário ou senha incorretos.";
    mensagem.style.color = "red";
  }
}