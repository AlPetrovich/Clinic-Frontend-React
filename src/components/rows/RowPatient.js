import React, { useContext } from "react";
import { ModalContext } from '../../contexts/modalContext';
import { PatientContext } from "../../contexts/patientContext";


export const RowPatient = ({patient}) => {

  const { setModalTitle ,setShowModal } = useContext(ModalContext);
  const{ obtenerPaciente, eliminarPaciente } = useContext(PatientContext);

  //abrir modal y editar el paciente
  const editPatient = () => {
    obtenerPaciente(patient);
    setModalTitle('Edit Patient');
    setShowModal(true);
  }
  
  const deletePatient = () => {
    console.log("Eliminar Dentista");
  }

  return (
    <tr key={patient.id}>
      <td>
        <button 
          className="button is-small is-info mr-1" 
          title="Edit"
          onClick={()=>editPatient()}
        >
          <span className="icon is-small">
            <i className="fas fa-edit"></i>
          </span>
        </button>
        <button 
          className="button is-small is-danger" 
          title="Delete"
          onClick={()=>eliminarPaciente(patient.id)}
        >
          <span className="icon is-small">
            <i className="fas fa-trash-alt"></i>
          </span>
        </button>
      </td>
      <td>{patient.name}</td>
      <td>{patient.lastname}</td>
      <td>{patient.dni}</td>
      <td>{patient.province}</td>
      <td>{patient.accessDate}</td>
    </tr>
  );
};
