export default function fetchData(key, url, lat, lon){

    //Make a request to a server with the given URL
    fetch(url + "?lat=" + lat + "&lon=" + lon + "&key=" + key)  

    //Check if the server responded or not
    .then(response => {
        if (!response.ok) {
          throw new Error(`Error de la API: ${response.statusText}`);
        }
        //Return server response in JSON format.
        console.log("Llamada exitosa")
        return response.json();
    })

    //Catch any error on fetch function
    .catch(error => {
        console.error('Error al obtener los datos del clima:', error);
      });
}