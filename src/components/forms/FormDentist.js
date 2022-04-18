import { useContext, useEffect, useState } from "react";
import { DentistContext } from "../../contexts/dentistContext";
import { ModalContext } from '../../contexts/modalContext';

export const FormDentist = () => {


    const { setShowModal } = useContext(ModalContext);

    const { registrarDentista,actualizarDentista, dentistaActual, obtenerDentista } = useContext(DentistContext)


    const dentistDefault={
        name:'',
        lastname:'',
        licence:''
    }

    const [dentist, setDentist] = useState(dentistDefault);
    const [mensaje, setMensaje] = useState(null)

    useEffect(() => {
      
      //---------------------------------------------------ver
      if(dentistaActual !== null){
        setDentist(dentistaActual);
      }else{
        setDentist(dentistDefault);
      }
      /// eslint-disable-next-line
    
    }, [dentistaActual])
    

    const handleChange = (e) => {
        setDentist({
            ...dentist,
            [e.target.name]: e.target.value
        });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        //VALIDACIONES
        if(dentist.name.trim() === '' && dentist.lastname.trim() === '' && dentist.licence.trim() === ''){
            setMensaje('Todos los campos son obligatorios');
            return;
        }

        if(dentistaActual !== null){
          actualizarDentista(obtenerDentistaTemporal());
        }else{
          registrarDentista(obtenerDentistaTemporal());
        }
        //cerrar modal
        cerrarModal();
    }

    //Reseteo del formulario
    const limpiarForm = () => {
        setMensaje(null);
        setDentist(dentistDefault);
    }

    const cerrarModal = () => {
        limpiarForm();
        setShowModal(false);
        obtenerDentista(null);
    }

    const obtenerDentistaTemporal = () => {
        let dentistaTemporal = {...dentist};
        if(dentistaTemporal.licence === "") delete dentistaTemporal.licence;
        if(dentistaTemporal.lastname === "") delete dentistaTemporal.lastname;
        return dentistaTemporal;
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
                value={ dentist.name }
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
                value={ dentist.lastname }
                onChange={ handleChange }
              />
            </p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Licencia</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control is-expanded has-icons-left">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Ingrese su Licencia"
                name="licence"
                value={ dentist.licence }
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
