import { createContext, useReducer } from "react";
import { paciente } from "../components/const/actionsTypes";
import Axios from "axios";
import { patientReducer } from "../components/reducer/patientReducer";
import Swal from "sweetalert2";

export const PatientContext = createContext();

export const PatientContextProvider = (props) => {
  //definimos states que queremos compartir al resto de componentes
  const initialState = {
    patientList: [],
    patientActual: null,
  };

  const [state, dispatch] = useReducer(patientReducer, initialState);

  const obtenerPacientes = async () => {
    try {
      const resultado = await Axios.get(
        "http://localhost:8080/api/patient/list"
      );
      dispatch({
        type: paciente.OBTENER_PACIENTES,
        payload: resultado.data, //envia lista de pacientes
      });

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al obtener los pacientes",
        toast: true,
      });
      console.log(error);
    }
  };

  const registrarPaciente = async (pacientes) => {
    try {
      const resultado = await Axios.post(
        "http://localhost:8080/api/patient/",
        pacientes
      );

      dispatch({
        type: paciente.REGISTRAR_PACIENTE,
        payload: resultado.data,
      });
      Swal.fire({
        icon: "success",
        title: "Correcto",
        text: "Paciente registrado correctamente",
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

  const obtenerPaciente = async (pacientes) => {
    try {
      let pacienteEncontrado = null;
      if (pacientes !== null) {
        const resultado = await Axios.get(
          `http://localhost:8080/api/patient/${pacientes.id}`
        );
        pacienteEncontrado = resultado.data;
      } else {
        pacienteEncontrado = pacientes;
      }
      dispatch({
        type: paciente.OBTENER_PACIENTE,
        payload: pacienteEncontrado,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al obtener el pacientes",
        toast: true,
      });
      console.log(error);
    }
  };

  const actualizarPaciente = async (pacientes) => {
    try {
      const resultado = await Axios.put(
        `http://localhost:8080/api/patient/`,
        pacientes
      );

      dispatch({
        type: paciente.MODIFICAR_PACIENTE,
        payload: resultado.data,
      });
      Swal.fire({
        icon: "success",
        title: "Correcto",
        text: "Paciente actualizado correctamente",
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

  const eliminarPaciente = async (idPaciente) => {
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
          await Axios.delete(`http://localhost:8080/api/patient/${idPaciente}`);

          dispatch({
            type: paciente.ELIMINAR_PACIENTE,
            payload: idPaciente,
          });

          Swal.fire({
            icon: "success",
            title: "Correcto",
            text: "Paciente eliminado correctamente",
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
    <PatientContext.Provider
      value={{
        patientList: state.patientList,
        patientActual: state.patientActual,

        obtenerPacientes,
        registrarPaciente,
        obtenerPaciente,
        actualizarPaciente,
        eliminarPaciente,
      }}
    >
      {/* compartimos a todos los hijos que tenga este provider */}
      {props.children}
    </PatientContext.Provider>
  );
};
