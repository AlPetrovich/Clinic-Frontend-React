import { types } from "../types/types";

const intilialState = {
    checking: true,
}   

export const authReducer = (state = intilialState, action) => {

    switch (action.type) {

        case types.authLogin:
            return {
                ...state,
                checking: false,
                ...action.payload
            }
         
        default:
            return state;
        }    
}