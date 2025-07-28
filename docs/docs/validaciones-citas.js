document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault(); // Evita el envío si hay errores

  const barbero = document.getElementById('barbero').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;

  if (!barbero || !fecha || !hora) {
    alert('Por favor, completa todos los campos antes de enviar.');
    return;
  }

  const horaSeleccionada = new Date(`1970-01-01T${hora}:00`);
  const horaMinima = new Date(`1970-01-01T09:00:00`);
  const horaMaxima = new Date(`1970-01-01T20:00:00`);

  if (horaSeleccionada < horaMinima || horaSeleccionada > horaMaxima) {
    alert('La hora debe estar entre las 9:00 AM y las 8:00 PM.');
    return;
  }

  alert('¡Cita registrada exitosamente! Pronto recibirás una confirmación.');
});
