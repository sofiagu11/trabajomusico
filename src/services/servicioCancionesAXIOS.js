import axios from "axios";
export async function consultarConAxios(){

    //URI=URL+EP DEL SERVICIO
    const IDARTISTA = "3YcBF2ttyueytpXtEzn1Za"
    const URI=`https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`
    const TOKEN ="Bearer BQCxDED5r5WNeiga0setZwK9PJ4vRWSx4tZhrW5DCOdxHBTTO1N5OTgKfCi1rKXFbbO9vlseN1GpOJTrXGgjomoPD6erBUyziHj4RnC8vN6chleAj4k";

    //CONSTRUYO LA PETICION
    const PETICION={
        headers: {
            Authorization: TOKEN,

          },

    }

    //ORDENAR MI RESPUESTA
    try{
        //UTILIZAMOS LA PROMESA ENCARGADA DE CONSUMIIR EL API
    let respuesta=await axios.get(URI,PETICION)
    let canciones=respuesta.data
    return canciones
    }catch(error){
        throw new Error("ups fallamos "+error)
    }
}