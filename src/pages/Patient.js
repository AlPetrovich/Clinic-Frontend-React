import React from "react";
import { TablePatient } from "../components/tables/TablePatient";
import { Layout } from "../components/common/Layout";
import { ToolbarPatient } from "../components/toolbars/ToolbarPatient";
import { Modal } from "../components/common/Modal";
import { FormPatient } from "../components/forms/FormPatient";
import { PatientContextProvider } from "../contexts/patientContext";

export const Patient = () => {
  return (
    <Layout>
      <PatientContextProvider>
        <div className="panel ">
          <div className="panel-heading">Patients</div>
          <div className="box">
            <ToolbarPatient />
            <TablePatient />
          </div>
        </div>
        <Modal>
          <FormPatient />
        </Modal>
      </PatientContextProvider>
    </Layout>
  );
};
