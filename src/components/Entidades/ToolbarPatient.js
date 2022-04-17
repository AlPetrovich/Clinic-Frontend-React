import React, { useContext } from "react";
import { ModalContext } from '../../contexts/modal/modalContext';

export const ToolbarPatient = () => {

   const { setModalTitle ,setShowModal } = useContext(ModalContext);

    const abrirModalCrear=()=>{
        setModalTitle('Create Dentist');
        setShowModal(true);
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
