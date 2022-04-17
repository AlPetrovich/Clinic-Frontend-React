import React from 'react'
import { TableDentist } from '../components/Entidades/TableDentist'
import { Layout } from '../components/common/Layout'
import { ToolbarDentist } from '../components/Entidades/ToolbarDentist'
import { Modal } from '../components/common/Modal'

export const Dentist = () => {
  return (
    <Layout>
        <div className='panel '>
            <div className='panel-heading'>
              Dentist
            </div>
            <div className='box'>
                <ToolbarDentist />
                <TableDentist />
            </div>
        </div>
        <Modal></Modal>
    </Layout>
  )
}
