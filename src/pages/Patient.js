import React from "react";
import { TablePatient } from "../components/Entidades/TablePatient";
import { Layout } from "../components/common/Layout";
import { ToolbarPatient } from "../components/Entidades/ToolbarPatient";
import { Modal } from "../components/common/Modal";

export const Patient = () => {
  return (
    <Layout>
      <div className="panel ">
        <div className="panel-heading">Patients</div>
        <div className="box">
          <ToolbarPatient />
          <TablePatient />
        </div>
      </div>
      <Modal></Modal>
    </Layout>
  );
};
