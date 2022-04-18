import React, { useContext, useState } from 'react'
import { ModalContext } from '../../contexts/modalContext';


export const FormPatient = () => {

    const { setShowModal } = useContext(ModalContext);

    const patientDefault={
        name:'',
        lastname:'',
        province:''
    }

    const [patient, setPatient] = useState(patientDefault);
    const [mensaje, setMensaje] = useState(null)

    const handleChange = (e) => {
        setPatient({
            ...patient,
            [e.target.name]: e.target.value
        });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        if(patient.name.trim() === '' && patient.lastname.trim() === '' && patient.province.trim() === ''){
            setMensaje('Todos los campos son obligatorios');
            return;
        }

    
        //cerrar modal
        cerrarModal();
    }

    const limpiarForm = () => {
        setMensaje(null);
        setPatient(patientDefault);
    }

    const cerrarModal = () => {
        limpiarForm();
        setShowModal(false);
    }

   
       

  return(
    <form onSubmit={ handleOnSubmit }>

    { mensaje ? <div className="notification is-danger">{mensaje}</div> : null }

     
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Nombre Completo</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control is-expanded has-icons-left">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Nombre"
                name="name"
                value={ patient.name }
                onChange={ handleChange }
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control is-expanded">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Apellidos"
                name="lastname"
                value={ patient.lastname }
                onChange={ handleChange }
              />
            </p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Provincia</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control is-expanded has-icons-left">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Ingrese su provincia"
                name="province"
                value={ patient.licence }
                onChange={ handleChange }
              />
              <span className="icon is-small is-left">
                <i className="fas fa-map-marked-alt"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-primary mr-1">Guardar</button>
              <button
                type="button"
                className="button"
                onClick={ () => cerrarModal() } 
              >Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

