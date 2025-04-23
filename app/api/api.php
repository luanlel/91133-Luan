<?php
// Verifica se o método de requisição é POST
if ($_SERVER['request_method'] !== 'post') {
    header("Location: http://localhost:8080/app/index.html");
    exit;
}

// Inclui o script que lista os dados
include 'autenticar.php';

// Inclui a conexão com o banco
include 'conexao.php';

// Inclui o script que lista os dados
include 'insere.php';
// Inclui o script que lista os dados
include '/view/conecta.php';

echo "<script>
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'http://localhost:8080/app/index.html';
    </script>";
?>