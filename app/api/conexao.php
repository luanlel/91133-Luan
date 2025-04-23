<?php
if ($_SERVER['request_method'] !== 'post') {
    header("Location: http://localhost:8080/app/index.html");
    exit;
}

$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "estoque";

$conn = new mysqli($host, $usuario, $senha, $banco);

if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

echo("conectado")
?>
