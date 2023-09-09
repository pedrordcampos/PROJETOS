<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "projetosDB";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
  die("Conexão falhou: " . $conn->connect_error);
}

// Executa a consulta
$sql = "SELECT * FROM jogoDaForca";
$result = $conn->query($sql);

// Cria um array com os resultados
$data = array();
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $data[] = $row;
  }
}

// Converte o array em JSON
$json = json_encode($data);

// Imprime o JSON
echo $json;

?>
