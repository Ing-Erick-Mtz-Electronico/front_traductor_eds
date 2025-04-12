const mensajeSubtitulo = ( subtitulo, texto, ms ) => {
  setTimeout(() => {
    subtitulo.innerHTML = texto;
  }, ms);
}