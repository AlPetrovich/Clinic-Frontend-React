import React, { useContext, useEffect} from "react";
import { PatientContext } from "../../contexts/patientContext";
import { RowPatient } from "../rows/RowPatient";


export const TablePatient = () => {


  const { patientList, obtenerPacientes } = useContext(PatientContext);

  useEffect(() => {
    obtenerPacientes();
  },[]);

  if(patientList.length === 0){
    return <p>No hay pacientes</p>
  }

 
  return (
    <div className="table-container">
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Actions</th>
            <th>Name</th>
            <th>Lastname</th>
            <th>DNI</th>
            <th>Access Date</th>
          </tr>
        </thead>
        <tbody>
          {
            patientList.map( patient =>(
                <RowPatient patient={patient} key={patient.id}/>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
