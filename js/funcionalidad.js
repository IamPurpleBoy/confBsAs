
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

//funcion ocultar campos segun medio de pago
const metodoPagoSelect = document.getElementById("transferencia");
const codigoInput = document.getElementById("codigo");
const vencimientoInput = document.getElementById("vencimiento");
const debitoRadio = document.getElementById("debito");
const creditoRadio = document.getElementById("credito");
const tarjetaInput = document.getElementById("tarjeta");
const datosBanco = document.getElementById("banco");

metodoPagoSelect.addEventListener("change", toggleCampos);

function toggleCampos() {
 if (metodoPagoSelect.checked) {
 codigoInput.style.display = "none";
 vencimientoInput.style.display = "none";
 tarjetaInput.style.display = "none";
 //datosBanco.style.display = "block";
 } else if (debitoRadio.checked || creditoRadio.checked) {
  codigoInput.style.display = "block";
 vencimientoInput.style.display = "block";
 tarjetaInput.style.display = "block";
 //datosBanco.style.display = "none";
 }
}

// Event listeners para los radios de opción Débito y Crédito
debitoRadio.addEventListener("change", toggleCampos);
creditoRadio.addEventListener("change", toggleCampos);


// Agregar un evento click al botón "Resumen"


// Función para calcular y mostrar el total a pagar

const precioTicket= 1000;
const cantidadTicketsInput = document.querySelector('#cantidad');
const categoriaSelect = document.querySelector('#categoria');
const totalAPagarElement = document.querySelector('#monto');

cantidadTicketsInput.addEventListener('input', mostrarMonto);
categoriaSelect.addEventListener('input', mostrarMonto);

// Obtener los valores seleccionados del formulario
function mostrarMonto() {
 const cantidadTickets = parseInt(cantidadTicketsInput.value);
 const categoriaSeleccionada = parseInt(categoriaSelect.value);
 
 console.log("Categoria de comprador: ",categoriaSeleccionada);
 console.log("Valor por entrada: ",precioTicket);
 console.log("Cantidad de tickets: ", cantidadTickets);

 // Obtener el descuento correspondiente a la categoría seleccionada
 const descuento = (categoriaSeleccionada/100);
 console.log(descuento)

 // Calcular el total a pagar con el descuento
 const totalSinDesc = cantidadTickets * precioTicket;
 const totalAPagar = totalSinDesc -( totalSinDesc * descuento) ;
 console.log(totalAPagar);

 // Mostrar el total a pagar en el elemento correspondiente
 totalAPagarElement.textContent = `Total a Pagar: $${totalAPagar} (Accede a un descuento del ${categoriaSeleccionada}%)`;
}