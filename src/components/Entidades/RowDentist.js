import React, { useContext } from "react";
import { DentistContext } from "../../contexts/dentistContext";
import { ModalContext } from '../../contexts/modalContext';


export const RowDentist = ({dentist}) => {


  const { setModalTitle ,setShowModal } = useContext(ModalContext);
  const { obtenerDentista, eliminarDentista } = useContext(DentistContext);

  //abrir modal y editar el dentista
  const editDentist = () => {
    obtenerDentista(dentist);
    setModalTitle('Edit Dentist');
    setShowModal(true);
  }
  


  return (
    <tr key={dentist.id}>
      <td>
        <button 
          className="button is-small is-info mr-1" 
          title="Edit"
          onClick={()=>editDentist()}
        >
          <span className="icon is-small">
            <i className="fas fa-edit"></i>
          </span>
        </button>
        <button 
          className="button is-small is-danger" 
          title="Delete"
          onClick={()=>eliminarDentista(dentist.id)}
        >
          <span className="icon is-small">
            <i className="fas fa-trash-alt"></i>
          </span>
        </button>
      </td>
      <td>{dentist.name}</td>
      <td>{dentist.lastname}</td>
      <td>{dentist.licence}</td>
    </tr>
  );
};
