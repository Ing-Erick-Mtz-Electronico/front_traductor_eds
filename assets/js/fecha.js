const fechaActual = () => {
  const params = {
    day: "numeric",
    month: "long",
    hour12: "true",
    hour: "numeric",
    minute: "numeric",
  };

  return (dato = new Intl.DateTimeFormat("es-ES", params).format(new Date()));
};

const horaActual = () => {
  const params = {
    hour12: "true",
    hour: "numeric",
    minute: "numeric",
  };

  return (dato = new Intl.DateTimeFormat("es-ES", params).format(new Date()));
};
