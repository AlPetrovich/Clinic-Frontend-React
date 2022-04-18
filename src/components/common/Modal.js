import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/modalContext';


export const Modal = ( props ) => {

    const {showModal ,modaltTitle , setShowModal, setModalTitle } = useContext(ModalContext);

   
  return(
    <div className={ `modal ${ showModal ? 'is-active' : '' } `}>
        <div className='modal-background'></div>
            <div className='modal-card'>
                <header className='modal-card-head'>
                    <p className='modal-card-title'>{modaltTitle}</p>
                    <button
                        className='delete'
                        aria-label='close'
                        onClick={()=>{
                            setShowModal(false)
                            setModalTitle('')
                        }}
                    ></button>
                </header>
                <section className='modal-card-body'>
                    {props.children}
                </section>
            </div>
    </div>
  )
};