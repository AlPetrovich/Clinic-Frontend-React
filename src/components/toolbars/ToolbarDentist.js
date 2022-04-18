import React, { useContext } from "react";
import { DentistContext } from "../../contexts/dentistContext";
import { ModalContext } from '../../contexts/modalContext';

export const ToolbarDentist = () => {

   const { setModalTitle ,setShowModal } = useContext(ModalContext);

   const { obtenerDentista } = useContext(DentistContext)

    const abrirModalCrear=()=>{
        setModalTitle('Create Dentist');
        setShowModal(true);
        obtenerDentista(null);
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
