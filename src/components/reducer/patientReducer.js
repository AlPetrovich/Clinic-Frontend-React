import { paciente } from "../const/actionsTypes";


export const patientReducer = ( state , action ) => {

    switch (action.type) {
        case paciente.OBTENER_PACIENTES:
            return{
                ...state,
                patientList: action.payload
            };
        
        case paciente.REGISTRAR_PACIENTE:
            return{
                ...state,
                patientList :[action.payload, ...state.patientList]
            };
        
        case paciente.OBTENER_PACIENTE:
            return{
                ...state,
                pacienteActual: action.payload
            };

        case paciente.MODIFICAR_PACIENTE:
            return{
                ...state,
                patientList: state.patientList.map( paciente =>(
                    paciente.idpaciente === action.payload.idpaciente ? action.payload : paciente
                ))
            }
        
        case paciente.ELIMINAR_PACIENTE:
            return{
                ...state,
                patientList: state.patientList.filter(paciente =>(
                    paciente.idpaciente !== action.payload 
                ))
            }
        default:
            return state;
    }
}