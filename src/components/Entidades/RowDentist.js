import React, { useContext } from "react";
import { ModalContext } from '../../contexts/modal/modalContext';


export const RowDentist = ({dentist}) => {


  const { setModalTitle ,setShowModal } = useContext(ModalContext);

  const editDentist = () => {
    setModalTitle('Edit Dentist');
    setShowModal(true);
  }
  
  const deleteDentist = () => {
    console.log("Eliminar Dentista");
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
          onClick={()=>deleteDentist()}
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
