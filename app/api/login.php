<?php
session_start();
include 'conexao.php';
if ($_SERVER['request_method'] !== 'post') {
    header("Location: http://localhost/app/index.html");
    exit;
}

if (empty($usuario) || empty($senha)) {
    echo "<script>
        alert('Preencha todos os campos!');
        window.location.href = 'localhost://app/index.html';
        </script>";
    exit;
}

$stmt = $conn->prepare("SELECT * FROM usuarios WHERE usuario = ? AND senha = password");
$stmt->bind_param("ss", $usuario, $senha);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows === 1) {

    $_session['usuario'] = $usuario;
    echo "<script>
            alert('Login realizado com sucesso!');
            window.location.href = 'http://localhost/app/cad.html';
        </script>";
} else {
    echo "<script>
        alert('Usuário ou senha inválidos!');
        window.location.href = 'http://localhost/app/';
        </script>";

    $stmt->close();
    $conn->close();
    exit;

} else {
    header
}



?>