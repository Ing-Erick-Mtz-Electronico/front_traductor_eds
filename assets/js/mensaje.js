const asignarMensaje = ( spnMensaje, texto, ms ) => {
  setTimeout(() => {
    spnMensaje.innerHTML = texto;
  }, ms);
}