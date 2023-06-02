
// Obtener el elemento del formulario por su ID
var emailInput = document.getElementById('email');
var nombreInput = document.getElementById("nombre");
var apellidoInput = document.getElementById('apellido');
var dniInput = document.getElementById('dni');

// Agregar un evento de escucha para la validación
emailInput.addEventListener('blur', validarEmail);
nombreInput.addEventListener('blur', validarFormulario);
apellidoInput.addEventListener('blur', validarFormulario);
dniInput.addEventListener('blur', validarFormulario);

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
  var apellido = nombreInput.value;
  var apellido = apellidoInput.value;
  var dni = dniInput.value;

  if (nombre === '' || apellido === '' || email === '' || dni === '') {
    mostrarVacio(true);
  } else {
    mostrarVacio(true);
  }
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

//funcion para mostrar u ocultar el menssaje de Formulario vacio
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
let metodoPagoSelect = document.getElementById("transferencia");
let codigoInput = document.getElementById("codigo");
let vencimientoInput = document.getElementById("vencimiento");
let debitoRadio = document.getElementById("debito");
let creditoRadio = document.getElementById("credito");
let tarjetaInput = document.getElementById("tarjeta");
let datosBanco = document.getElementById("banco");

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


//Evento click al botón "Resumen"
var resumenBtn = document.getElementById("resumen-btn");
resumenBtn.addEventListener("click", validarCompra);

function validarCompra() {
    var nombre = nombreInput.value;
    var apellido = apellidoInput.value;
    var categoriaSeleccionada = categoriaSelect.options[categoriaSelect.selectedIndex].text;
    var totalAPagar = totalAPagarElement.textContent.split(":")[1].trim();
    

    if (validarFormulario() == false) {
        document.getElementById('mensaje').innerHTML = 'Todos los campos son obligatorios';
        return false;
    } else {
        var mensaje =
            "Estimado/a " + nombre + " " + apellido +
            ", gracias por su participación en este evento. Usted ha comprado su boleto a un precio preferencial como " +
            categoriaSeleccionada + ". El monto a pagar es " + totalAPagar + " con un descuento del " + categoriaSelect.value + "%. En breve recibira un e-mail con el boleto electronico  y su Factura de compra.";
        alert(mensaje);
        return true;
    }
}


// Función para calcular y mostrar el total a pagar
const precioTicket= 1000;
let cantidadTicketsInput = document.querySelector('#cantidad');
let categoriaSelect = document.querySelector('#categoria');
let totalAPagarElement = document.querySelector('#monto');

cantidadTicketsInput.addEventListener('input', mostrarMonto);
categoriaSelect.addEventListener('input', mostrarMonto);

// Obtener los valores seleccionados del formulario
function mostrarMonto() {
let cantidadTickets = parseInt(cantidadTicketsInput.value);
var categoriaSeleccionada = parseInt(categoriaSelect.value);

 
 console.log("Categoria de comprador: ",categoriaSeleccionada);
 console.log("Valor por entrada: ",precioTicket);
 console.log("Cantidad de tickets: ", cantidadTickets);


 // Obtener el descuento correspondiente a la categoría seleccionada
 var descuento = (categoriaSeleccionada/100);
 console.log(descuento)

 // Calcular el total a pagar con el descuento
let totalSinDesc = cantidadTickets * precioTicket;
var totalAPagar = totalSinDesc -( totalSinDesc * descuento) ;
 console.log(totalAPagar);

 // Mostrar el total a pagar en el elemento correspondiente
 totalAPagarElement.textContent = `Total a Pagar: $${totalAPagar} (Descuento del ${categoriaSeleccionada}%)`;
}




