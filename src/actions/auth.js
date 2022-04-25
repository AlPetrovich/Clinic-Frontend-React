//proceso de autenticacion 
import Swal from "sweetalert2";
import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";

export const startLogin=( usernameOrMail, password)=>{
    
    return async( dispatch ) =>{
        const resp = await fetchSinToken('http://localhost:8080/api/auth/login',{ usernameOrMail, password}, 'POST');
        const body = await resp.json();
        console.log(body);
        console.log(body.tokenAccess);
 

        if(body.tokenAccess){
            localStorage.setItem('token', body.tokenAccess);
            localStorage.setItem('token-init-date', new Date().getTime());
            
            dispatch(login({
                name: usernameOrMail,
                pass: password,
            }))
        }else{
            Swal.fire('Error', body.message, 'error');
        }
    }
}


const login = ( user ) =>({
    type : types.authLogin,
    payload : user
})