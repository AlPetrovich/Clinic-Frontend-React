import React, { useContext,useEffect , useState } from 'react'
import { PatientContext } from '../../contexts/patientContext';
import { ModalContext } from '../../contexts/modalContext';


export const FormPatient = () => {

    const { setShowModal } = useContext(ModalContext);
    const { registrarPaciente, actualizarPaciente, patientActual, obtenerPaciente } = useContext(PatientContext);

    const patientDefault={
        name:'',
        lastname:'',
        dni:'',
        accessDate:''
    }

    const [patient, setPatient] = useState(patientDefault);
    const [mensaje, setMensaje] = useState(null)

    const { name, lastname, dni, accessDate } = patient;

    useEffect(() => {
      //---------------------------------------------------ver
      if(patientActual !== null){
        setPatient(patientActual);
      }else{
        setPatient(patientDefault);
      }
      /// eslint-disable-next-line
    
    }, [patientActual])


    const handleChange = (e) => {
        setPatient({
            ...patient,
            [e.target.name]: e.target.value
        });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        if(patient.name.trim() === '' && patient.lastname.trim() === '' && patient.dni.trim() === '' && patient.accessDate.trim() === ''){
            setMensaje('Todos los campos son obligatorios');
            return;
        }

        if(patientActual !== null){
          actualizarPaciente(obtenerPacienteTemporal());
        }else{
          registrarPaciente(obtenerPacienteTemporal());
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
        obtenerPaciente(null);
    }

   
    const obtenerPacienteTemporal = () => {
      let pacienteTemporal = {...patient};
      if(pacienteTemporal.dni === "") delete pacienteTemporal.dni;
      return pacienteTemporal;
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
                value={ name }
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
                value={ lastname }
                onChange={ handleChange }
              />
            </p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">DNI</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control is-expanded has-icons-left">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Ingrese su DNI"
                name="dni"
                value={ dni }
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
        <div className="field-label is-normal">
          <label className="label">Fecha de Acceso</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control is-expanded has-icons-left">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Ingrese su Fecha de Acceso"
                name="accessDate"
                value={ accessDate }
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

