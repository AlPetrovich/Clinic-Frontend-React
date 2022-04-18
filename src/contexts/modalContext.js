import React, { createContext, useState } from 'react';

export const  ModalContext = createContext();

//FUNCION retorna lo que queremos proveer
export const ModalContextProvider = props =>{
    
    //states que queremos compartir con el resto de los componentes
    const [showModal, setShowModal] = useState(false);
    const [modaltTitle, setModalTitle] = useState('');

    //PROVIDER podia estar en App, sigue clientes, luego layout
    return(
        <ModalContext.Provider value={{
            showModal,
            modaltTitle,
            setShowModal,
            setModalTitle
        }}
        >
        {/* compartimos estos valores con todos los componentes hijos del contexto */}
         { props.children } 
            
        </ModalContext.Provider>
    )
}