// Obtener las referencias a los elementos por sus IDs


/* Agrega referencias a otros elementos según sea necesario */

// URL del endpoint
const endpointURLservicios = "https://dreamtek.tech/mipyme/api/v1/user/1/servicios";

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
    // Asumiendo que solo hay un elemento en el array

    for(i=0; i<dataArray.length; i++){
      let data = dataArray[i];
      let nombreProducto = document.getElementById("nombre-producto-"+i);
      let dataString = JSON.stringify(data, null, 2);

      nombreProducto.innerText = dataString;

      
      console.log(nombreProducto);
      console.log('Esta es la posicion '+i+' con los siguientes datos '+dataString);
    }

    
     

     
     
   

  })
  .catch((error) => {
    // Manejar errores en caso de que la solicitud falle
    console.error("Error de red:", error);
  });
