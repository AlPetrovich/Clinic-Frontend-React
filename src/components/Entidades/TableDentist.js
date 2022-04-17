import React, { useState } from "react";
import { RowDentist } from "./RowDentist";

export const TableDentist = () => {


  const [dentistList, setDentistList] = useState([
    {
      "id": 1,
      "name": "Luiss token ",
      "lastname": "Perez s12",
      "licence": "123ass"
    },
    {
      "id": 2,
      "name": "pepe ",
      "lastname": "pepe",
      "licence": "123ass"
    }
  ]);


  return (
    <div className="table-container">
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Actions</th>
            <th>Name</th>
            <th>Lastname</th>
            <th>Licence</th>
          </tr>
        </thead>
        <tbody>
          {
            dentistList.map( dentist =>(
                <RowDentist dentist={dentist} key={dentist.id}/>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
