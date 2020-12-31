/************************************
 capturas la url del frontend y la enviamos al backend
 ************************************/
//Importamos el url del backend
import { appApiUrl } from "../configs/config";
//helper para capturar la url que envia el frontend y la procesamos para enviar al backend
export const fetchData = async (
  isTokenrequire, //capturamos el token
  path, //capturamos el url
  method = "GET", //capturamos el metodo de envio de datos
  data = {} //capturamos la data
) => {
  //Definimos el estado inicial de la informacion
  let result = {
    state: false,
    data: null,
  };
  //Capturamos el token del localstorage del navegador
  const token = localStorage.getItem("token") || "";
  //Combinamos el url del backend con el url del frontend
  const url = `${appApiUrl}/${path}`;

  //Definimos el header que va en el url
  let headers = { "Content-Type": "application/json" };

  //Si el token es requerido el heder contendra el token del localstorage
  if (isTokenrequire) {
    headers = {
      "Content-Type": "application/json",
      token,
    };
  }
  //Inicializamos las opciones del url como un objeto vacio
  let options = {};
  //Si el metodo es diferente de GET las opciones tendran ciertos valores nuevos
  if (method === "GET") {
    options = {
      headers,
    };
  } else {
    options = {
      method: method, // *GET, POST, PUT, DELETE, etc.
      headers,
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    };
  }
  //Hacemos la funcion para el envio de datos del frontend con el backend
  await fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      result = {
        //si todo salio bien quiero ver el estado final de la informacion
        state: true,
        data,
      };
    })
    .catch((error) => {
      console.log("fetch cone", error);
      result = {
        //si todo salio mal quiero ver el estado de la informacion con el error devuelto
        state: false,
        data: null,
      };
    });
  return result;
};
