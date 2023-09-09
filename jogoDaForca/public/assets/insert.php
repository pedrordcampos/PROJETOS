<?php
// Conectar-se ao banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "projetosDB";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
  die("Conexão falhou: " . $conn->connect_error);
}

// Preparar uma consulta de inserção
$stmt = $conn->prepare("INSERT INTO jogoDaForca (palavras, categorias) VALUES (?, ?)");
$stmt->bind_param("ss", $addPalavra, $addCategoria);

// Executar a consulta
$addPalavra = $_POST["addPalavra"];
$addCategoria = $_POST["addCategoria"];
$stmt->execute();

// Fechar a conexão
$stmt->close();
$conn->close();
?>
