import { ELIMINAR_DENTISTA, MODIFICAR_DENTISTA, OBTENER_DENTISTA, OBTENER_DENTISTAS, REGISTRAR_DENTISTA } from "../const/actionsTypes";
// const initialState = {
//     dentistList: []
// }
// dispatch({
//     type: OBTENER_DENTISTAS,
//     payload: clientes
// })

export const dentistaReducer = ( state , action ) => {

    switch (action.type) {
        case OBTENER_DENTISTAS:
            return{
                ...state,
                dentistList: action.payload
            };
        
        case REGISTRAR_DENTISTA:
            return{
                ...state,
                dentistList :[action.payload, ...state.dentistList]
            };
        
        case OBTENER_DENTISTA:
            return{
                ...state,
                dentistaActual: action.payload
            };

        case MODIFICAR_DENTISTA:
            return{
                ...state,
                dentistList: state.dentistList.map( dentista =>(
                    dentista.idDentista === action.payload.idDentista ? action.payload : dentista
                ))
            }
        
        case ELIMINAR_DENTISTA:
            return{
                ...state,
                dentistList: state.dentistList.filter(dentista =>(
                    dentista.idDentista !== action.payload 
                ))
            }
        default:
            return state;
    }
}