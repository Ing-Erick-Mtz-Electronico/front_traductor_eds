const isertarResolucion = () => {
  const resolucionModelo = {
    "dalle2": [
      '256x256',
      '512x512',
      '1024x1024'
    ],
    "dalle3": [
      '1024x1024',
      '1792x1024',
      '1024x1792'
    ]
  }

  const modelo = selectModelo.value;
  const resolucion = resolucionModelo[modelo];

  if (resolucion) {
    selectResolucion.innerHTML = resolucion.map(resolucion => `<option value="${resolucion}">${resolucion}</option>`).join('');
  } else {
    selectResolucion.innerHTML = '<option value="">Seleccione un modelo</option>';
  }
  
}