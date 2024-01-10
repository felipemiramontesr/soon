// Obtener las referencias a los elementos por sus IDs
const nombre = document.getElementById("nombre");
const miLogo = document.getElementById("mi-logo");
const imgCom = document.getElementById("img-complementaria");
const copy = document.getElementById("copy");
const miH2 = document.getElementById("mi-h2");
const miParrafo = document.getElementById("mi-parrafo-1");
const miParrafo2 = document.getElementById("mi-parrafo-2");

/* Agrega referencias a otros elementos según sea necesario */

// URL del endpoint
const endpointURL = "https://dreamtek.tech/mipyme/api/v1/user/1";

// Realizar la solicitud utilizando fetch
fetch(endpointURL)
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
    // Asumiendo que solo hay un elemento en el array
    const data = dataArray[0];

    // Asignar la URL del logotipo al atributo src de la imagen
    miLogo.src = "https://dreamtek.tech" + data.user_picture;

    //Asignar la URL a la imagen complementaria
    imgCom.src = "https://dreamtek.tech" + data.field_imagen_complementaria;

    // Obtener el nombre de la empresa del objeto
    const nombreDeLaPyme = data.field_nombre_de_la_pyme;
    // Actualizar el texto del elemento h2 con el nombre de la empresa
    miH2.innerText = `Nuestro nuevo sitio para ${nombreDeLaPyme} estará disponible pronto!`;
    copy.innerText = `Copyright 2019 | All Rights Reserved - by ${nombreDeLaPyme}`;
    nombre.innerText = `${nombreDeLaPyme}`;
    miParrafo2.innerText = `Bienvenido a ${nombreDeLaPyme}, donde ofrecemos una impresionante gama de productos y servicios diseñados para llevar tu experiencia digital a nuevas alturas.`;

    // Obtener descripcion de la empresa del objeto
    const descripcionDeLaPyme = data.field_descripcion_de_la_pyme;
    const servicios = data.field_servicios;
    // Actualizar el texto del elemento h2 con el nombre de la empresa
    miParrafo.innerText = `${descripcionDeLaPyme}`;

    console.log(data);
  })
  .catch((error) => {
    // Manejar errores en caso de que la solicitud falle
    console.error("Error de red:", error);
  });
