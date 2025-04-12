const cajaImagen = document.getElementById("caja-imagen");
const textArea = document.getElementById("area-texto");
const btEnviar = document.getElementById("btn-enviar");
const spnMensaje = document.getElementById("spn-mensaje");

const codeUsuario = crypto.randomUUID();

spnMensaje.innerHTML = fechaActual();

btEnviar.addEventListener('click', generarImagen);

