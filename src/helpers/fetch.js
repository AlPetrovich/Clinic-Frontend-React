


const fetchSinToken = (endpoint, data, method = 'GET' )=>{

    const url = `http://localhost:8080/api/auth/login`;

    if(method === 'GET'){
        return fetch( url );
    }else{
        return fetch( url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}


export{
    fetchSinToken
}   