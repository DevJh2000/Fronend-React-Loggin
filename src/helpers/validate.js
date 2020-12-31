import Swal from "sweetalert2";

//Funcion para validar la data obtenida del backend
export const validateFetchData = ({ data, state }) => {
  if (!state) {
    Swal.fire({
      title: "Error!",
      text: "Lo sentimos no se pudo conectar con el servicios",
      icon: "error",
    });
    return false;
  }
  if (!data.status) {
    Swal.fire({
      title: "Error!",
      text: data.msg,
      icon: "error",
    });
    return false;
  }
  return true;
};
