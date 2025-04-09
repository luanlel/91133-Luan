document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault // Impede o envio do formulário
   
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

// Validação dos Campos
if (!username || !password) {
    alert("Por favor, preencha todos os campos.");
    return;
}

if (password.length < 8) {
    alert("Insira uma senha com, pelo menos, 8 caracteres.");
    return;
}

// Salva o nome de usuário no localStorage
localStorage.setItem("username", username);

window.location.href = "produtos.html"; // Abre uma nova página chamada painel.html
alert("Login realizado com sucesso!"); // Pop-up de sucesso
});