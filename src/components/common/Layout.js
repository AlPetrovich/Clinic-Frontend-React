import React from 'react'
import { ModalContextProvider } from '../../contexts/modal/modalContext'
import { Header } from './Header'
import { Menu } from './Menu'

export const Layout = (props) => {
  return (
    <ModalContextProvider>
        <div>
            <Header></Header>
            <br></br>
            <div className='container'>
                <div className='columns'>
                    <div className='column is-one-quarter'>
                        <Menu></Menu>
                    </div>
                    <div className='column '>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    </ModalContextProvider>
  )
}
