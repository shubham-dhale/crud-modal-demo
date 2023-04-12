import React, { useEffect, useState } from "react";
import { Col, Container, Row, } from "react-bootstrap";
import DataTable from "./Components/Tables/DataTable";
import ModalForm from "./Components/Modals/Modal";

function App(props) {
  const [students, setStudents] = useState([
    {
      id: "1",
      name: "Alex Clark",
      age: "23",
      std: "XII",
      rollNo: "20015",
    },
    {
      id: "2",
      name: "David John",
      age: "21",
      std: "XII",
      rollNo: "20018",
    },
  ]);

  const getItems = () => {
    return students;
  };

  const addItemToState = (student) => {
    setStudents([...students, student]);
  };

  const updateState = (student) => {
    const studentIndex = students.findIndex((data) => data.id === student.id);
    const newArray = [
      ...students.slice(0, studentIndex),
      student,
      ...students.slice(studentIndex + 1),
    ];
    setStudents(newArray);
  };

  const deleteItemFromState = (id) => {
    const updatedItems = students.filter((student) => student.id !== id);
    setStudents(updatedItems);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Container className="App">
      <Row>
        <Col>
          <h1 style={{ margin: "20px 0" }}>CRUD Database</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <DataTable
            students={students}
            updateState={updateState}
            deleteItemFromState={deleteItemFromState}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          
          <ModalForm
            buttonLabel="Add Item" addItemToState={addItemToState}
          >
            Add Item
          </ModalForm>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
