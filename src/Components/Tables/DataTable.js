import React from "react";
import { Button, Table } from "react-bootstrap";
import ModalForm from "../Modals/Modal";

function DataTable(props) {

  const students = props.students.map((student) => {
    return (
      <tr key={student.id}>
        <th scope="row">{student.id}</th>
        <td>{student.name} </td>
        <td>{student.age}</td>
        <td>{student.std}</td>
        <td>{student.rollNo}</td>
        <td>
          <div  >
            <ModalForm
              buttonLabel="Edit"
              student={student}
              updateState={props.updateState}
            />
            <Button className="btn btn-danger btn-sm" onClick={() => props.deleteItemFromState(student.id)}>
              Del
            </Button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <Table responsive hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Std</th>
          <th>RollNo</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{students}</tbody>
    </Table>
  );
}

export default DataTable;
