// ─── Referencias al DOM ───────────────────────────────────────────────────────
const formulario = document.getElementById("formulario");
const nombre     = document.getElementById("nombre");
const correo     = document.getElementById("correo");
const mensaje    = document.getElementById("mensaje");
const estado     = document.getElementById("estado");

// ─── Función auxiliar: muestra mensajes con clase visual ──────────────────────
function mostrarEstado(texto, tipo) {
  // tipo puede ser: "exito", "error" o "" (neutro, ej. "Enviando...")
  estado.textContent = texto;
  estado.className   = tipo; // aplica la clase CSS correspondiente
}

// ─── Evento: submit del formulario ────────────────────────────────────────────
formulario.addEventListener("submit", function(e) {
  e.preventDefault(); // evita el envío nativo del formulario

  // 1. Validación de campos obligatorios
  if (!nombre.value.trim() || !correo.value.trim() || !mensaje.value.trim()) {
    mostrarEstado("Por favor, completa todos los campos obligatorios.", "error");
    return;
  }

  // 2. Validación de formato de correo electrónico con RegExp
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexCorreo.test(correo.value.trim())) {
    mostrarEstado("El correo electrónico ingresado no es válido.", "error");
    return;
  }

  // 3. Deshabilitar botón mientras se procesa el envío
  const boton = formulario.querySelector("button[type='submit']");
  boton.disabled = true;

  // 4. Mensaje de espera (estado neutro, sin clase de color)
  mostrarEstado("Enviando...", "");

  // 5. Simulación de envío mediante una Promesa con retardo de 2 segundos
  simularEnvio()
    .then(function(msg) {
      // Envío exitoso
      mostrarEstado(msg, "exito");
      formulario.reset();
    })
    .catch(function(err) {
      // Error en el envío simulado
      mostrarEstado(err, "error");
    })
    .finally(function() {
      // Siempre rehabilitar el botón al terminar
      boton.disabled = false;
    });
});

// ─── Eventos input: limpia el mensaje de estado al corregir un campo ──────────
[nombre, correo, mensaje].forEach(function(campo) {
  campo.addEventListener("input", function() {
    if (estado.textContent !== "Enviando...") {
      mostrarEstado("", "");
    }
  });
});

// ─── Evento blur: valida el correo al salir del campo ─────────────────────────
correo.addEventListener("blur", function() {
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (correo.value.trim() && !regexCorreo.test(correo.value.trim())) {
    mostrarEstado("El correo electrónico ingresado no es válido.", "error");
  }
});

// ─── Función: simula el envío al servidor con una Promesa ─────────────────────
function simularEnvio() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      // 70% de probabilidad de éxito, 30% de fallo simulado
      if (Math.random() > 0.3) {
        resolve("¡Mensaje enviado correctamente!");
      } else {
        reject("Error al conectar con el servidor. Intenta nuevamente.");
      }
    }, 2000);
  });
}
