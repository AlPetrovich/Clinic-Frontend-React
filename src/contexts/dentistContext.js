import { createContext, useReducer } from "react";
import {
  ELIMINAR_DENTISTA,
  MODIFICAR_DENTISTA,
  OBTENER_DENTISTA,
  OBTENER_DENTISTAS,
  REGISTRAR_DENTISTA,
} from "../components/const/actionsTypes";
import Axios from "axios";
import { dentistaReducer } from "../components/reducer/dentistaReducer";
import Swal from "sweetalert2";

export const DentistContext = createContext();

export const DentistContextProvider = (props) => {
  //definimos states que queremos compartir al resto de componentes
  const initialState = {
    dentistList: [],
    dentistaActual: null,
  };

  const [state, dispatch] = useReducer(dentistaReducer, initialState);

  const obtenerDentistas = async () => {
    try {
      const resultado = await Axios.get(
        "http://localhost:8080/api/dentist/list"
      );
      dispatch({
        type: OBTENER_DENTISTAS,
        payload: resultado.data, //envia lista de dentistas
      });

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al obtener los dentistas",
        toast: true,
      });
      console.log(error);
    }
  };

  const registrarDentista = async (dentista) => {
    try {
      const resultado = await Axios.post("http://localhost:8080/api/dentist/",dentista,{
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      });

      dispatch({
        type: REGISTRAR_DENTISTA,
        payload: resultado.data,
      });
      Swal.fire({
        icon: "success",
        title: "Correcto",
        text: "Dentista registrado correctamente",
        toast: true,
      });

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Carece de los permisos necesarios",
        toast: true,
      });
      console.log(error);
    }
  };

  const obtenerDentista = async (dentista) => {
    try {
      let dentistaEncontrado = null;
      if (dentista !== null) {
        const resultado = await Axios.get(
          `http://localhost:8080/api/dentist/${dentista.id}`
        );
        dentistaEncontrado = resultado.data;
      } else {
        dentistaEncontrado = dentista;
      }
      dispatch({
        type: OBTENER_DENTISTA,
        payload: dentistaEncontrado,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al obtener el dentista",
        toast: true,
      });
      console.log(error);
    }
  };

  const actualizarDentista = async (dentista) => {
    try {
      const resultado = await Axios.put(`http://localhost:8080/api/dentist/${dentista.id}`,dentista,{
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        }
      });

      dispatch({
        type: MODIFICAR_DENTISTA,
        payload: resultado.data,
      });
      window.location.reload();
      Swal.fire({
        icon: "success",
        title: "Correcto",
        text: "Dentista actualizado correctamente",
        toast: true,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Carece de los permisos necesarios",
        toast: true,
      });
      console.log(error);
    }
  };

  const eliminarDentista = async (idDentista) => {
    try {
      Swal.fire({
        icon: "question",
        title: "¿Estas seguro?",
        text: "Esta acción no se puede deshacer",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar",
        toast: true,
      }).then(async (result) => {
        if (result.value) {
          await Axios.delete(`http://localhost:8080/api/dentist/${idDentista}`,{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          });

          dispatch({
            type: ELIMINAR_DENTISTA,
            payload: idDentista,
          });

          Swal.fire({
            icon: "success",
            title: "Correcto",
            text: "Dentista eliminado correctamente",
            toast: true,
          });
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Carece de los permisos necesarios",
        toast: true,
      });
      console.log(error);
    }
  };


  //indicar cual es el estado que queremos compartir
  return (
    <DentistContext.Provider
      value={{
        dentistList: state.dentistList,
        dentistaActual: state.dentistaActual,

        obtenerDentistas,
        registrarDentista,
        obtenerDentista,
        actualizarDentista,
        eliminarDentista,
      }}
    >
      {/* compartimos a todos los hijos que tenga este provider */}
      {props.children}
    </DentistContext.Provider>
  );
};
