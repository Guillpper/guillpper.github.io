<?php
include("conexion.php");

$sql = "SELECT c.Id_cita, a.Fecha, a.Hora, a.presupuesto, b.nombre_barbero, cl.nombre_cliente
        FROM tb_citas c
        JOIN tb_agenda a ON c.Id_agenda = a.Id_agenda
        JOIN tb_barbero b ON c.cedula_barbero = b.cedula_barbero
        JOIN tb_cliente cl ON c.cedula_cliente = cl.cedula_cliente";

$result = $conn->query($sql);
echo "<table border='1' style='background:#1a1a1a;color:#fff;font-family:sans-serif'>";
echo "<tr><th>ID</th><th>Fecha</th><th>Hora</th><th>Presupuesto</th><th>Barbero</th><th>Cliente</th></tr>";

while($row = $result->fetch_assoc()) {
  echo "<tr>
    <td>{$row['Id_cita']}</td>
    <td>{$row['Fecha']}</td>
    <td>{$row['Hora']}</td>
    <td>\${$row['presupuesto']}</td>
    <td>{$row['nombre_barbero']}</td>
    <td>{$row['nombre_cliente']}</td>
  </tr>";
}
echo "</table>";
?>
