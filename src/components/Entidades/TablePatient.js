import React, { useState } from "react";
import { RowPatient } from "./RowPatient";


export const TablePatient = () => {


  const [patientList, setPatientList] = useState(
  [
    {
      "id": 1,
      "name": "Luiss token ",
      "lastname": "Perez s12",
      "province": "123ass"
    }
  ]
  );


  return (
    <div className="table-container">
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Actions</th>
            <th>Name</th>
            <th>Lastname</th>
            <th>province</th>
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
