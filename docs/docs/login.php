<?php
session_start();
include("conexion.php");

$correo = $_POST['correo'];
$clave  = $_POST['clave'];

$stmt = $conn->prepare("SELECT id, nombre, clave FROM tb_usuarios WHERE correo = ?");
$stmt->bind_param("s", $correo);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
  $usuario = $result->fetch_assoc();
  if (password_verify($clave, $usuario['clave'])) {
    $_SESSION['usuario'] = $usuario['nombre'];
    header("Location: dashboard.php");
    exit;
  }
}
echo "Usuario o clave incorrecta";
?>
