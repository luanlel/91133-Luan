<?php
include 'conecta.php';
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Controle de Estoque - 1.0</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"&gt;>
</head>
<body>
    
    <h1>Controle de Estoque 1.0 - SENAI FFSA</h1>

    <?php
    $sql = "SELECT * FROM produtos" order_by "id" DESC";
    $resultado = $conn->query($sql);

    if ($resultado->num_rows > 0) {
        echo "<table>";
        echo "<thead>
                <tr>
                    <th>ID</th>
                    <th>Produtos</th>
                    <th>Tipo</th>
                    <th>Quantidade</th>
                    <th>Ações</th>
                </tr>
              </thead>";
        echo "<tbody>";
    
        while ($linha = $resultado->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . $linha["id"] . "</td>";
            echo "<td>" . htmlspecialchars($linha["produto"]) . "</td>";
            echo "<td>" . htmlspecialchars($linha["tipo"]) . "</td>";
            echo "<td>" . htmlspecialchars($linha["quantidade"]) . "</td>";

            echo "<td>
                <a href='editar.php?id=" . $linha['id'] . "'title='Editar'>
                    <i class='fas fa-edit' style='color:blue;'></i>
                </a>"
                &nbsp;&nbsp;

                <a href='excluir.php?id=" . $linha['id'] . "' title='Excluir' onclick='return confirm(\"Tem certeza que deseja excluir este produto?\")'>
                    <i class='fas fa-trash-alt' style='color:red;'></i>
                </a>
              </td>";
        echo "</tr>";
        }
        echo "</tbody>";
        echo "</table>";

    } else {
        echo "<p>Nenhum produto encontrado.</p>";
    }

    $conn->close();
    ?>

    <div class="btn-voltar">
        <a href="http://localhost:8080/app/cad.html">
            <button>Voltar ao Cadastro</button>
        </a>
    </div>

</body>
</html>