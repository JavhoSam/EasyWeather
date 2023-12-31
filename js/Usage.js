export default function fetchUsage(url, key){

    //Make a request to a server with the given URL
    fetch(url + key)  

    //Check if the server responded or not
    .then(response => {
        if (!response.ok) {
          throw new Error(`Error de la API: ${response.statusText}`);
        }
        //Return server response in JSON format.
        console.log("Llamada exitosa")
        return response.json();
    })
    .then(data => {
        console.log(data);
      })

    //Catch any error on fetch function
    .catch(error => {
        console.error('Error al obtener los datos del uso:', error);
      });
}