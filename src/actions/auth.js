

//proceso de autenticacion 

import { fetchSinToken } from "../helpers/fetch"

export const startLogin=( usernameOrMail, password)=>{
    
    return async() =>{
        const resp = await fetchSinToken('http://localhost:8080/api/auth/login',{ usernameOrMail, password}, 'POST');
        const body = await resp.json();

        console.log(body);
    }
}