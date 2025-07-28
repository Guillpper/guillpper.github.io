<?php
include("conexion.php");

$barbero     = $_POST['cedula_barbero'];
$cliente     = $_POST['cedula_cliente'];
$fecha       = $_POST['fecha'];
$hora        = $_POST['hora'];
$presupuesto = $_POST['presupuesto'];

$stmt_agenda = $conn->prepare("INSERT INTO tb_agenda (Fecha, Hora, presupuesto) VALUES (?, ?, ?)");
$stmt_agenda->bind_param("ssd", $fecha, $hora, $presupuesto);
$stmt_agenda->execute();
$id_agenda = $stmt_agenda->insert_id;

$stmt_cita = $conn->prepare("INSERT INTO tb_citas (Id_agenda, cedula_barbero, cedula_cliente) VALUES (?, ?, ?)");
$stmt_cita->bind_param("iii", $id_agenda, $barbero, $cliente);
$stmt_cita->execute();

echo "Cita registrada correctamente.";
?>