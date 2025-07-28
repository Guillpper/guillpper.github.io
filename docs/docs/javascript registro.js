const clienteRadio = document.getElementById("cliente");
const barberoRadio = document.getElementById("barbero");
const barberoExtra = document.getElementById("barbero-extra");
const form = document.querySelector("form");
const popup = document.getElementById("registro-exitoso");
const fotosCortes = document.getElementById("fotos_cortes");

function toggleBarberoFields() {
  barberoExtra.style.display = barberoRadio.checked ? "block" : "none";
}

clienteRadio.addEventListener("change", toggleBarberoFields);
barberoRadio.addEventListener("change", toggleBarberoFields);
window.addEventListener("DOMContentLoaded", toggleBarberoFields);

if (fotosCortes) {
  fotosCortes.addEventListener("change", () => {
    if (fotosCortes.files.length > 5) {
      alert("Solo puedes subir un máximo de 5 fotos.");
      fotosCortes.value = "";
    }
  });
}

form.addEventListener("submit", (e) => {
  if (barberoRadio.checked) {
    e.preventDefault();
    popup.style.display = "block";

    setTimeout(() => {
      popup.style.display = "none";
      form.submit();
    }, 2000);
  }
});
