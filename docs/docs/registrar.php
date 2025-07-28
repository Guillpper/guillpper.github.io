<?php
include("conexion.php");

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$clave  = password_hash($_POST['clave'], PASSWORD_DEFAULT);

$stmt = $conn->prepare("INSERT INTO tb_usuarios (nombre, correo, clave) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $nombre, $correo, $clave);
$stmt->execute();

header("Location: ../index.html");
?>