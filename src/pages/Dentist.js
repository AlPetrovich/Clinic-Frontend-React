import React from 'react'
import { TableDentist } from '../components/Entidades/TableDentist'
import { Layout } from '../components/common/Layout'
import { ToolbarDentist } from '../components/Entidades/ToolbarDentist'
import { Modal } from '../components/common/Modal'
import { FormDentist } from '../components/Entidades/FormDentist'
import { DentistContextProvider } from '../contexts/dentistContext'

export const Dentist = () => {
  return (
    <Layout>
        <DentistContextProvider>
          <div className='panel '>
              <div className='panel-heading'>
                Dentist
              </div>
              <div className='box'>
                  <ToolbarDentist />
                  <TableDentist />
              </div>
          </div>
          
          <Modal>
            <FormDentist />
          </Modal>
        </DentistContextProvider>
    </Layout>
  )
}
