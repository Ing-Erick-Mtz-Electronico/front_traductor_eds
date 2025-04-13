const generarImagen = async () => {
  const codeUsuario = crypto.randomUUID();
  const peticion = textArea.value.trim();

  if (!peticion) {
    textArea.focus();
    return false;
  }

  asignarMensaje(spnMensaje, "Esperando imagen IA...", 1000);

  textArea.value = "";

  cajaImagen.innerHTML =
    "<img src='./assets/img/loading.gif' alt='Cargando' />";
  
  try {
    const respuesta = await fetch(
      "http://localhost:3123/api/imagen/v1/generar",
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          codUsuarioPeticion: codeUsuario,
          textoPeticion: peticion,
        }),
      }
    );
    spnMensaje.innerHTML = "Generando imagen...";

    const datos = await respuesta.json();

    if (datos && datos.urlImagen) {
      cajaImagen.innerHTML =
        "<img src='" + datos.urlImagen + "' alt='Imagen generada por ia' />";
        spnMensaje.innerHTML = fechaActual();
    } else {
      spnMensaje.innerHTML = "No pudo ser generada la imagen";
    }
  } catch (error) {
    console.log("Error: ", error);
  }

  textArea.focus();
};
