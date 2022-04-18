import React, { useContext } from "react";
import { ModalContext } from '../../contexts/modalContext';
import { PatientContext } from "../../contexts/patientContext";

export const ToolbarPatient = () => {

   const { setModalTitle ,setShowModal } = useContext(ModalContext);

   const { obtenerPacientes } = useContext(PatientContext)

    const abrirModalCrear=()=>{
        setModalTitle('Create Dentist');
        setShowModal(true);
        obtenerPacientes(null);
    }


  return (
    <div>
      <div className="container">
        <button 
        className="button is-small is-primary" 
        title="Create"
        onClick={()=>abrirModalCrear()}
        
        >
          <span className="icon is-small">
            <i className="fas fa-plus"></i>
          </span>
          <span>New Register</span>
        </button>
      </div>
    </div>
  );
};
