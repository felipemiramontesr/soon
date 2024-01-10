// URL del endpoint
const endpointURLservicios = "https://dreamtek.tech/mipyme/api/v1/user/1";

// Realizar la solicitud utilizando fetch
fetch(endpointURLservicios)
  .then((response) => {
    // Verificar si la solicitud fue exitosa (código de estado 200)
    if (!response.ok) {
      throw new Error(
        `Error al obtener los datos. Código de estado: ${response.status}`
      );
    }
    // Parsear la respuesta como JSON
    return response.json();
  })
  .then((dataArray) => {
    // Verificar si hay datos en el array
    if (!dataArray || dataArray.length === 0) {
      throw new Error("No se encontraron datos en la respuesta.");
    }

    // Asumiendo que solo hay un elemento en el array
    const data = dataArray[0];

    // Manejar el campo field_servicios
    const serviciosRaw = data.field_servicios;

    // Dividir las cadenas de servicios en objetos
    const serviciosArray = serviciosRaw.split(',   \n').map((servicioString) => {
      const lines = servicioString.trim().split('\n');
      const nombre = lines[0].trim();
      const imagen = lines[2] ? lines[2].trim() : ''; // Ajuste para la imagen
      const descripcion = lines.slice(3, -1).join('\n').trim(); // Ajuste para la descripción
      const precioLine = lines[lines.length - 1].trim();
      const precioMatch = precioLine.match(/(\d+(\.\d{1,2})?)/);
      const precio = precioMatch ? parseFloat(precioMatch[0]) : 0;
      return { nombre, imagen, descripcion, precio };
    });

    // Ahora puedes acceder a serviciosArray para obtener información detallada sobre cada servicio
    console.log("Servicios:");
    serviciosArray.forEach((servicio) => {
      console.log("Nombre del servicio:", servicio.nombre);
      console.log("Imagen del servicio:", servicio.imagen);
      console.log("Descripción del servicio:", servicio.descripcion);
      console.log("Precio del servicio:", servicio.precio);
      console.log("-------------------------");
    });
  })
  .catch((jsonError) => {
    // Manejar errores en el parseo JSON
    console.error("Error en el parseo JSON:", jsonError);
  })
  .catch((error) => {
    // Manejar otros errores, incluidos errores de red
    console.error("Error general:", error);
  });
