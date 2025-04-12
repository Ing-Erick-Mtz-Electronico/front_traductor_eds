const enviarInformacion = async () => {
  const textoTraducir = cajaTexto.value.trim();

  if (!textoTraducir) {
    cajaTexto.focus();
    return false;
  }

  mensajeSubtitulo(subtitulo, "Enviando...", 0);

  const imgEntregado =
    "<img src='../assets/img/entregado.png' alt='imagen de chulito' />";

  const txtEnviado = document.createElement("div");
  txtEnviado.className = "mensaje enviado";
  txtEnviado.innerHTML =
    textoTraducir +
    "<span class='metadato'><span class='hora'> " +
    horaActual() +
    "</span><span class='visto'>" +
    imgEntregado +
    "</span></span>";

  areaTrabajo.append(txtEnviado);

  try {
    const respuesta = await fetch("http://localhost:3123/api/v1/traducir", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        codUsuarioPeticion: codeUsuario,
        idiomaPeticion: idiomaDestino.value,
        textoPeticion: textoTraducir,
        modeloPeticion: modelo.value
      }),
    });

    subtitulo.innerHTML = "Traduciendo...";
  
    const dato = await respuesta.json();
  
    const txtRecibido = document.createElement("div");
  
    txtRecibido.className = "mensaje recibido";
  
    txtRecibido.innerHTML =
      dato.traduccion +
      "<span class='metadato'><span class='hora'>" +
      horaActual() +
      "</span></span>";
  
    areaTrabajo.append(txtRecibido);
  
    marco.scrollTop = marco.scrollHeight;
  
    mensajeSubtitulo(subtitulo, "En línea", 3000);
  } catch (error) {
    console.log("El error es: ", error);
  }
  cajaTexto.value = "";
  cajaTexto.focus();
};
