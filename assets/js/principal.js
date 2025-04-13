const cajaImagen = document.getElementById("caja-imagen");
const textArea = document.getElementById("area-texto");
const btEnviar = document.getElementById("btn-enviar");
const spnMensaje = document.getElementById("spn-mensaje");
const selectModelo = document.getElementById("select-modelo");
const selectResolucion = document.getElementById("select-resolucion");
const selectCalidad = document.getElementById("select-calidad");

spnMensaje.innerHTML = fechaActual();
isertarResolucion();

selectModelo.addEventListener('change', isertarResolucion);
btEnviar.addEventListener('click', generarImagen);