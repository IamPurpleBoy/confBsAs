
// Obtener el elemento del formulario por su ID
var emailInput = document.getElementById('email');

// Agregar un evento de escucha para la validación
emailInput.addEventListener('blur', validarEmail);

// Función de validación del correo electrónico
function validarEmail() {
  // Obtener el valor del correo electrónico ingresado
  var email = emailInput.value;

  // Expresión regular para validar el formato del correo electrónico
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Verificar si el correo electrónico cumple con el formato correcto
  if (regex.test(email)) {
    // El correo electrónico es válido, eliminar cualquier mensaje de error
    mostrarError(false);
  } else {
    // El correo electrónico no es válido, mostrar un mensaje de error
    mostrarError(true);
  }
}

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    
    if (nombre === "") {
        alert("Por favor, ingrese su nombre.");
        mostrarVacio(false);
    }
    
    // Agrega validaciones adicionales para otros campos si es necesario
    
    mostrarVacio(true); // Si todos los campos están validados correctamente, permite enviar el formulario
}


// Función para mostrar u ocultar el mensaje de error
function mostrarError(mostrar) {
  var mensajeError = document.getElementById('mensaje');
  if (mostrar) {
    mensajeError.textContent = 'El correo electrónico no tiene el formato correcto';
    mensajeError.style.display = 'block'; // Mostrar el mensaje de error
  } else {
    mensajeError.textContent = ''; // Limpiar el mensaje de error
    mensajeError.style.display = 'none'; // Ocultar el mensaje de error
  }
}

function mostrarVacio(mostrar) {
    var mensajeError = document.getElementById('mensaje');
    if (mostrar) {
      mensajeError.textContent = 'El formulario no esta completo. Faltan datos';
      mensajeError.style.display = 'block'; // Mostrar el mensaje de error
    } else {
      mensajeError.textContent = ''; // Limpiar el mensaje de error
      mensajeError.style.display = 'none'; // Ocultar el mensaje de error
    }
  }


// Obtener referencias a los elementos necesarios
const resumenButton = document.querySelector('#resumen-btn');
const totalAPagarElement = document.querySelector('#monto');

// Agregar un evento click al botón "Resumen"
resumenButton.addEventListener('click', mostrarMonto);

// Función para calcular y mostrar el total a pagar
function mostrarMonto(event) {
  event.preventDefault(); // Evitar que se envíe el formulario

  // Obtener los valores seleccionados del formulario
  const cantidadTickets = parseInt(document.getSelection('#cantidad').value);
  const categoriaSeleccionada = document.getSelection('select').value;
  
  // Obtener el descuento correspondiente a la categoría seleccionada
  const descuento = parseInt(document.querySelector(`option[value="${categoriaSeleccionada}"]`).dataset.category);
  
  // Calcular el total a pagar con el descuento
  const totalAPagar = cantidadTickets * (1000 - descuento);
  
  // Mostrar el total a pagar en el elemento correspondiente
  totalAPagarElement.textContent = `Total a Pagar: $${totalAPagar}`;
}
