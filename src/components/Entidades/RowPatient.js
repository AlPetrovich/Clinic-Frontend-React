import React, { useContext } from "react";
import { ModalContext } from '../../contexts/modal/modalContext';


export const RowPatient = ({patient}) => {

  const { setModalTitle ,setShowModal } = useContext(ModalContext);



  const editPatient = () => {
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
          onClick={editPatient}
        >
          <span className="icon is-small">
            <i className="fas fa-edit"></i>
          </span>
        </button>
        <button 
          className="button is-small is-danger" 
          title="Delete"
          onClick={deletePatient}
        >
          <span className="icon is-small">
            <i className="fas fa-trash-alt"></i>
          </span>
        </button>
      </td>
      <td>{patient.name}</td>
      <td>{patient.lastname}</td>
      <td>{patient.province}</td>
    </tr>
  );
};